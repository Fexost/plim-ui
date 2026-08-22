import { OverlayModule, STANDARD_DROPDOWN_BELOW_POSITIONS } from '@angular/cdk/overlay';
import {
	Component,
	ElementRef,
	booleanAttribute,
	computed,
	effect,
	forwardRef,
	input,
	signal,
	untracked,
	viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import {
	buildHourOptions,
	buildMinuteOptions,
	formatDisplayTime,
	formatTimeInputValue,
	formatTimeValue,
	parseTimeInput,
	parseTimeValue,
} from './timepicker-utils';

@Component({
	selector: 'plim-timepicker',
	imports: [OverlayModule],
	templateUrl: './timepicker.html',
	styleUrl: './timepicker.scss',
	host: {
		class: 'plim-timepicker-host',
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => Timepicker),
			multi: true,
		},
	],
})
export class Timepicker implements ControlValueAccessor {
	private static nextId = 0;

	private readonly instanceId = Timepicker.nextId++;

	protected readonly inputId = `plim-timepicker-${this.instanceId}-input`;
	protected readonly toggleId = `plim-timepicker-${this.instanceId}-toggle`;
	protected readonly panelId = `plim-timepicker-${this.instanceId}-panel`;
	protected readonly overlayPositions = STANDARD_DROPDOWN_BELOW_POSITIONS;

	private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('input');

	private readonly valueState = signal<string | null>(null);
	private readonly inputTextState = signal('');
	private readonly openState = signal(false);
	private readonly disabledState = signal(false);
	private readonly touchedState = signal(false);
	private panelInteraction = false;

	private onChange: (value: string | null) => void = () => undefined;
	private onTouched: () => void = () => undefined;

	public readonly placeholder = input('Select time');
	public readonly minuteStep = input(1);
	public readonly invalid = input(false, { transform: booleanAttribute });
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly ariaLabel = input<string | undefined>(undefined);
	public readonly ariaLabelledBy = input<string | undefined>(undefined);

	protected readonly open = this.openState.asReadonly();
	protected readonly inputText = this.inputTextState.asReadonly();
	protected readonly hours = computed(() => buildHourOptions());
	protected readonly minutes = computed(() => buildMinuteOptions(this.minuteStep()));

	protected readonly selectedHour = computed(() => parseTimeValue(this.valueState())?.hour ?? 0);
	protected readonly selectedMinute = computed(
		() => parseTimeValue(this.valueState())?.minute ?? 0,
	);

	constructor() {
		effect(() => {
			if (this.isDisabled() && this.openState()) {
				untracked(() => this.openState.set(false));
			}
		});
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

	protected hourLabel(hour: number): string {
		return String(hour).padStart(2, '0');
	}

	protected minuteLabel(minute: number): string {
		return String(minute).padStart(2, '0');
	}

	protected onInputFocus(): void {
		if (!this.isDisabled()) {
			queueMicrotask(() => this.openPanel());
		}
	}

	protected onInput(event: Event): void {
		const input = event.target as HTMLInputElement;
		const formatted = formatTimeInputValue(input.value);
		this.inputTextState.set(formatted);
		input.value = formatted;
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

			this.commitInputText(false);
			this.markTouched();
		});
	}

	protected onInputKeydown(event: KeyboardEvent): void {
		if (this.isDisabled()) {
			return;
		}

		const allowedKeys = ['Backspace', 'Delete', 'Tab', 'Enter', 'Escape', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];

		if (allowedKeys.includes(event.key)) {
			if (event.key === 'Enter') {
				event.preventDefault();
				this.commitInputText(true);
				this.closePanel();
			} else if (event.key === 'Escape') {
				if (this.openState()) {
					event.preventDefault();
					this.closePanel();
				}
				this.syncInputFromValue();
			} else if (event.key === 'ArrowDown' && event.altKey) {
				event.preventDefault();
				this.openPanel();
			}

			return;
		}

		if (!/^\d$/.test(event.key)) {
			event.preventDefault();
		}
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

	protected onOverlayOutsideClick(event: MouseEvent): void {
		const input = this.inputRef()?.nativeElement;
		const target = event.target as Node;

		if (input?.contains(target) || document.getElementById(this.toggleId)?.contains(target)) {
			return;
		}

		this.closePanel();
	}

	protected onPanelMouseDown(): void {
		this.panelInteraction = true;
	}

	protected selectHour(hour: number): void {
		this.commitTime(hour, this.selectedMinute(), true);
		this.syncInputFromValue();
	}

	protected selectMinute(minute: number): void {
		this.commitTime(this.selectedHour(), minute, true);
		this.syncInputFromValue();
		this.closePanel();
		this.focusInput();
	}

	protected closePanel(): void {
		if (!this.openState()) {
			return;
		}

		this.openState.set(false);
		this.commitInputText(false);
		this.markTouched();
	}

	protected isDisabled(): boolean {
		return this.disabled() || this.disabledState();
	}

	private openPanel(): void {
		if (this.isDisabled()) {
			return;
		}

		if (!this.valueState()) {
			this.commitTime(0, 0, false);
		}

		this.syncInputFromValue();
		this.openState.set(true);
	}

	private commitInputText(emit: boolean): void {
		const parsed = parseTimeInput(this.inputTextState());

		if (!parsed) {
			this.syncInputFromValue();
			return;
		}

		this.commitTime(parsed.hour, parsed.minute, emit);
		this.syncInputFromValue();
	}

	private commitTime(hour: number, minute: number, emit: boolean): void {
		const value = formatTimeValue(hour, minute);
		this.valueState.set(value);

		if (emit) {
			this.onChange(value);
			this.markTouched();
		}
	}

	private syncInputFromValue(): void {
		const formatted = formatDisplayTime(this.valueState());
		this.inputTextState.set(formatted);

		const input = this.inputRef()?.nativeElement;
		if (input && input.value !== formatted) {
			input.value = formatted;
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
