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
	numberAttribute,
	signal,
	untracked,
	viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Option } from '../option/option';
import { AutocompletePanel } from './autocomplete-panel';
import {
	AutocompleteOptionView,
	nextActiveIndex,
	visibleAutocompleteOptions,
} from './autocomplete-utils';

@Component({
	selector: 'plim-autocomplete',
	imports: [OverlayModule, AutocompletePanel],
	templateUrl: './autocomplete.html',
	styleUrl: './autocomplete.scss',
	host: {
		class: 'plim-autocomplete-host',
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => Autocomplete),
			multi: true,
		},
	],
})
export class Autocomplete implements ControlValueAccessor, AfterContentInit {
	private static nextId = 0;

	private readonly instanceId = Autocomplete.nextId++;

	protected readonly inputId = `plim-autocomplete-${this.instanceId}-input`;
	protected readonly panelId = `plim-autocomplete-${this.instanceId}-panel`;
	protected readonly overlayPositions = STANDARD_DROPDOWN_BELOW_POSITIONS;

	private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('input');
	private readonly optionComponents = contentChildren(Option);

	private readonly valueState = signal<string | null>(null);
	private readonly inputTextState = signal('');
	private readonly openState = signal(false);
	private readonly activeIndexState = signal(0);
	private readonly disabledState = signal(false);
	private readonly touchedState = signal(false);
	private readonly filteringState = signal(false);
	private panelInteraction = false;
	private closeLocked = false;

	private onChange: (value: string | null) => void = () => undefined;
	private onTouched: () => void = () => undefined;

	public readonly placeholder = input('Search…');
	public readonly maxSuggestions = input(8, { transform: numberAttribute });
	public readonly invalid = input(false, { transform: booleanAttribute });
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly ariaLabel = input<string | undefined>(undefined);
	public readonly ariaLabelledBy = input<string | undefined>(undefined);

	protected readonly open = this.openState.asReadonly();
	protected readonly activeIndex = this.activeIndexState.asReadonly();
	protected readonly inputText = this.inputTextState.asReadonly();

	protected readonly options = computed<AutocompleteOptionView[]>(() =>
		this.optionComponents().map((option) => ({
			value: option.value(),
			label: option.label(),
			disabled: option.disabled(),
		})),
	);

	protected readonly visibleOptions = computed(() =>
		visibleAutocompleteOptions(
			this.options(),
			this.inputTextState(),
			this.filteringState(),
			this.maxSuggestions(),
		),
	);

	protected readonly selectedValue = this.valueState.asReadonly();

	constructor() {
		effect(() => {
			if (this.isDisabled() && this.openState()) {
				untracked(() => this.openState.set(false));
			}
		});
	}

	public ngAfterContentInit(): void {
		this.syncInputFromValue();
	}

	public writeValue(value: string | null): void {
		this.valueState.set(value);
		this.syncInputFromValue();
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

	protected optionId(index: number): string {
		return `${this.panelId}-option-${index}`;
	}

	protected activeDescendantId(): string | null {
		if (!this.openState()) {
			return null;
		}

		const options = this.visibleOptions();
		const index = this.activeIndexState();

		if (index < 0 || index >= options.length) {
			return null;
		}

		return this.optionId(index);
	}

	protected onInputPointerDown(): void {
		if (this.isDisabled()) {
			return;
		}

		this.filteringState.set(false);
		this.openPanel();
	}

	protected onInputFocus(): void {
		if (this.isDisabled()) {
			return;
		}

		this.filteringState.set(false);
		this.openPanel();
	}

	protected onInput(event: Event): void {
		const value = (event.target as HTMLInputElement).value;
		this.filteringState.set(true);
		this.inputTextState.set(value);
		this.activeIndexState.set(0);

		if (!this.openState()) {
			this.openPanel();
		}
	}

	protected onInputBlur(): void {
		queueMicrotask(() => {
			if (this.panelInteraction) {
				this.panelInteraction = false;
				return;
			}

			const input = this.inputRef()?.nativeElement;
			if (document.activeElement === input) {
				return;
			}

			if (this.openState()) {
				this.closePanel();
			}

			this.syncInputFromValue();
			this.markTouched();
		});
	}

	protected onOverlayOutsideClick(event: MouseEvent): void {
		if (this.closeLocked) {
			return;
		}

		const input = this.inputRef()?.nativeElement;
		if (
			input &&
			(input.contains(event.target as Node) || document.activeElement === input)
		) {
			return;
		}

		this.closePanel();
	}

	protected onOverlayDetach(): void {
		if (this.closeLocked) {
			return;
		}

		const input = this.inputRef()?.nativeElement;
		if (input && document.activeElement === input) {
			return;
		}

		this.closePanel();
	}

	protected onPanelMouseDown(): void {
		this.panelInteraction = true;
	}

	protected onInputKeydown(event: KeyboardEvent): void {
		if (this.isDisabled()) {
			return;
		}

		const options = this.visibleOptions();
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
				if (isOpen && options.length > 0) {
					event.preventDefault();
					this.commitActiveOption(options);
				}
				break;
			case 'Escape':
				if (isOpen) {
					event.preventDefault();
					this.closePanel();
					this.syncInputFromValue();
				}
				break;
			case 'Home':
				if (isOpen) {
					event.preventDefault();
					this.activeIndexState.set(0);
				}
				break;
			case 'End':
				if (isOpen) {
					event.preventDefault();
					this.activeIndexState.set(Math.max(options.length - 1, 0));
				}
				break;
		}
	}

	protected openPanel(): void {
		if (this.isDisabled()) {
			return;
		}

		this.closeLocked = true;
		this.activeIndexState.set(0);
		this.openState.set(true);
		requestAnimationFrame(() => {
			requestAnimationFrame(() => {
				this.closeLocked = false;
			});
		});
	}

	protected setActiveIndex(index: number): void {
		this.activeIndexState.set(index);
	}

	protected selectOption(value: string): void {
		this.filteringState.set(false);
		this.setValue(value, true);
		this.syncInputFromValue();
		this.closePanel();
		this.focusInput();
	}

	protected closePanel(): void {
		if (!this.openState()) {
			return;
		}

		this.openState.set(false);
		this.markTouched();
	}

	protected isDisabled(): boolean {
		return this.disabled() || this.disabledState();
	}

	private commitActiveOption(options: AutocompleteOptionView[]): void {
		const option = options[this.activeIndexState()];
		if (option) {
			this.selectOption(option.value);
		}
	}

	private moveActive(delta: number, optionCount: number): void {
		if (optionCount === 0) {
			return;
		}

		this.activeIndexState.set(nextActiveIndex(this.activeIndexState(), delta, optionCount));
	}

	private setValue(value: string | null, emit: boolean): void {
		this.valueState.set(value);

		if (emit) {
			this.onChange(value);
			this.markTouched();
		}
	}

	private syncInputFromValue(): void {
		this.filteringState.set(false);
		const value = this.valueState();
		const match = this.options().find((option) => option.value === value);
		const text = match?.label ?? '';
		this.inputTextState.set(text);

		const input = this.inputRef()?.nativeElement;
		if (input && input.value !== text) {
			input.value = text;
		}
	}

	private markTouched(): void {
		if (!this.touchedState()) {
			this.touchedState.set(true);
			this.onTouched();
		}
	}

	private focusInput(): void {
		this.inputRef()?.nativeElement.focus();
	}
}
