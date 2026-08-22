import { OverlayModule, STANDARD_DROPDOWN_BELOW_POSITIONS } from '@angular/cdk/overlay';
import {
	AfterContentInit,
	Component,
	ElementRef,
	booleanAttribute,
	computed,
	contentChildren,
	effect,
	forwardRef,
	input,
	signal,
	untracked,
	viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Option } from '../option/option';

interface SelectOptionView {
	value: string;
	label: string;
	disabled: boolean;
}

@Component({
	selector: 'plim-select',
	imports: [OverlayModule],
	templateUrl: './select.html',
	styleUrl: './select.scss',
	host: {
		class: 'plim-select-host',
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => Select),
			multi: true,
		},
	],
})
export class Select implements ControlValueAccessor, AfterContentInit {
	private static nextId = 0;

	private readonly instanceId = Select.nextId++;

	protected readonly triggerId = `plim-select-${this.instanceId}-trigger`;
	protected readonly panelId = `plim-select-${this.instanceId}-panel`;
	protected readonly overlayPositions = STANDARD_DROPDOWN_BELOW_POSITIONS;

	private readonly triggerRef = viewChild<ElementRef<HTMLButtonElement>>('trigger');
	private readonly optionComponents = contentChildren(Option);

	private readonly valueState = signal<string | null>(null);
	private readonly openState = signal(false);
	private readonly activeIndexState = signal(0);
	private readonly disabledState = signal(false);
	private readonly touchedState = signal(false);

	private onChange: (value: string | null) => void = () => undefined;
	private onTouched: () => void = () => undefined;

	public readonly placeholder = input('');
	public readonly invalid = input(false, { transform: booleanAttribute });
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly ariaLabel = input<string | undefined>(undefined);
	public readonly ariaLabelledBy = input<string | undefined>(undefined);

	protected readonly open = this.openState.asReadonly();
	protected readonly activeIndex = this.activeIndexState.asReadonly();

	protected readonly options = computed<SelectOptionView[]>(() =>
		this.optionComponents().map((option) => ({
			value: option.value(),
			label: option.label(),
			disabled: option.disabled(),
		})),
	);

	protected readonly selectableOptions = computed(() =>
		this.options().filter((option) => !option.disabled),
	);

	protected readonly displayText = computed(() => {
		const value = this.valueState();
		const match = this.options().find((option) => option.value === value);
		if (match) {
			return match.label;
		}

		return this.placeholder() || '';
	});

	protected readonly showPlaceholder = computed(() => {
		const value = this.valueState();
		const match = this.options().find((option) => option.value === value);
		if (match?.disabled) {
			return true;
		}

		return value === null || !this.options().some((option) => option.value === value);
	});

	constructor() {
		effect(() => {
			if (this.isDisabled() && this.openState()) {
				untracked(() => this.openState.set(false));
			}
		});
	}

	public ngAfterContentInit(): void {
		const initial = this.optionComponents().find((option) => option.selected());
		if (initial && this.valueState() === null) {
			this.setValue(initial.value(), false);
		}
	}

	public writeValue(value: string | null): void {
		this.valueState.set(value);
	}

	public registerOnChange(fn: (value: string | null) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public setDisabledState(isDisabled: boolean): void {
		this.disabledState.set(isDisabled);
	}

	protected isSelected(value: string): boolean {
		return this.valueState() === value;
	}

	protected optionId(index: number): string {
		return `plim-select-${this.instanceId}-option-${index}`;
	}

	protected activeDescendantId(): string | null {
		if (!this.openState()) {
			return null;
		}

		const options = this.selectableOptions();
		const index = this.activeIndexState();
		if (index < 0 || index >= options.length) {
			return null;
		}

		return this.optionId(index);
	}

	protected togglePanel(): void {
		if (this.isDisabled()) {
			return;
		}

		if (this.openState()) {
			this.closePanel();
			return;
		}

		this.openPanel();
	}

	protected onTriggerKeydown(event: KeyboardEvent): void {
		if (this.isDisabled()) {
			return;
		}

		const options = this.selectableOptions();
		const isOpen = this.openState();

		switch (event.key) {
			case 'ArrowDown':
				event.preventDefault();
				if (!isOpen) {
					this.openPanel();
				} else {
					this.moveActive(1, options.length);
				}
				break;
			case 'ArrowUp':
				event.preventDefault();
				if (!isOpen) {
					this.openPanel();
				} else {
					this.moveActive(-1, options.length);
				}
				break;
			case 'Enter':
			case ' ':
				event.preventDefault();
				if (isOpen) {
					this.commitActiveOption(options);
				} else {
					this.openPanel();
				}
				break;
			case 'Escape':
				if (isOpen) {
					event.preventDefault();
					this.closePanel();
					this.focusTrigger();
				}
				break;
			case 'Home':
				if (isOpen) {
					event.preventDefault();
					this.activeIndexState.set(0);
					this.scrollActiveOptionIntoView();
				}
				break;
			case 'End':
				if (isOpen) {
					event.preventDefault();
					this.activeIndexState.set(Math.max(options.length - 1, 0));
					this.scrollActiveOptionIntoView();
				}
				break;
		}
	}

	protected setActiveIndex(index: number): void {
		this.activeIndexState.set(index);
		this.scrollActiveOptionIntoView();
	}

	protected isDisabled(): boolean {
		return this.disabled() || this.disabledState();
	}

	protected selectOption(value: string): void {
		this.setValue(value, true);
		this.closePanel();
		this.focusTrigger();
	}

	protected closePanel(): void {
		if (!this.openState()) {
			return;
		}

		this.openState.set(false);
		this.markTouched();
	}

	private openPanel(): void {
		this.syncActiveIndex();
		this.openState.set(true);
		this.scrollActiveOptionIntoView();
	}

	private commitActiveOption(options: SelectOptionView[]): void {
		const option = options[this.activeIndexState()];
		if (option) {
			this.selectOption(option.value);
		}
	}

	private moveActive(delta: number, optionCount: number): void {
		if (optionCount === 0) {
			return;
		}

		const nextIndex = (this.activeIndexState() + delta + optionCount) % optionCount;
		this.activeIndexState.set(nextIndex);
		this.scrollActiveOptionIntoView();
	}

	private syncActiveIndex(): void {
		const options = this.selectableOptions();
		const currentValue = this.valueState();
		const selectedIndex = options.findIndex((option) => option.value === currentValue);
		this.activeIndexState.set(selectedIndex >= 0 ? selectedIndex : 0);
	}

	private setValue(value: string | null, emit: boolean): void {
		this.valueState.set(value);
		if (emit) {
			this.onChange(value);
			this.markTouched();
		}
	}

	private markTouched(): void {
		if (!this.touchedState()) {
			this.touchedState.set(true);
			this.onTouched();
		}
	}

	private focusTrigger(): void {
		this.triggerRef()?.nativeElement.focus();
	}

	private scrollActiveOptionIntoView(): void {
		if (!this.openState()) {
			return;
		}

		queueMicrotask(() => {
			document.getElementById(this.optionId(this.activeIndexState()))?.scrollIntoView?.({
				block: 'nearest',
			});
		});
	}
}
