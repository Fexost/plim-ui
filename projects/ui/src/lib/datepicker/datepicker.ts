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
	buildCalendarMonth,
	buildYearPage,
	formatDisplayDate,
	isDateDisabled,
	monthShortLabels,
	monthYearLabel,
	parseIsoDate,
	todayIso,
	weekdayLabels,
	yearPageLabel,
} from './datepicker-utils';

type DatepickerPanelView = 'calendar' | 'month' | 'year';

@Component({
	selector: 'plim-datepicker',
	imports: [OverlayModule],
	templateUrl: './datepicker.html',
	styleUrl: './datepicker.scss',
	host: {
		class: 'plim-datepicker-host',
	},
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => Datepicker),
			multi: true,
		},
	],
})
export class Datepicker implements ControlValueAccessor {
	private static nextId = 0;

	private readonly instanceId = Datepicker.nextId++;

	protected readonly triggerId = `plim-datepicker-${this.instanceId}-trigger`;
	protected readonly panelId = `plim-datepicker-${this.instanceId}-panel`;
	protected readonly overlayPositions = STANDARD_DROPDOWN_BELOW_POSITIONS;
	protected readonly weekdays = weekdayLabels;
	protected readonly monthLabels = monthShortLabels;

	private readonly triggerRef = viewChild<ElementRef<HTMLButtonElement>>('trigger');

	private readonly valueState = signal<string | null>(null);
	private readonly openState = signal(false);
	private readonly panelViewState = signal<DatepickerPanelView>('calendar');
	private readonly viewYearState = signal(new Date().getFullYear());
	private readonly viewMonthState = signal(new Date().getMonth());
	private readonly disabledState = signal(false);
	private readonly touchedState = signal(false);

	private onChange: (value: string | null) => void = () => undefined;
	private onTouched: () => void = () => undefined;

	public readonly placeholder = input('Select date');
	public readonly min = input<string | null>(null);
	public readonly max = input<string | null>(null);
	public readonly invalid = input(false, { transform: booleanAttribute });
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly ariaLabel = input<string | undefined>(undefined);
	public readonly ariaLabelledBy = input<string | undefined>(undefined);

	protected readonly open = this.openState.asReadonly();
	protected readonly panelView = this.panelViewState.asReadonly();

	protected readonly displayText = computed(() => {
		const formatted = formatDisplayDate(this.valueState());
		return formatted || this.placeholder();
	});

	protected readonly showPlaceholder = computed(() => !formatDisplayDate(this.valueState()));

	protected readonly headerLabel = computed(() => {
		const view = this.panelViewState();
		const year = this.viewYearState();

		if (view === 'year') {
			const startYear = Math.floor(year / 12) * 12;
			return yearPageLabel(startYear);
		}

		if (view === 'month') {
			return String(year);
		}

		return monthYearLabel(year, this.viewMonthState());
	});

	protected readonly calendarDays = computed(() =>
		buildCalendarMonth(
			this.viewYearState(),
			this.viewMonthState(),
			this.valueState(),
			this.min(),
			this.max(),
		),
	);

	protected readonly yearOptions = computed(() => buildYearPage(this.viewYearState()));

	protected readonly todayDisabled = computed(() => isDateDisabled(todayIso(), this.min(), this.max()));

	constructor() {
		effect(() => {
			if (this.isDisabled() && this.openState()) {
				untracked(() => this.openState.set(false));
			}
		});

		effect(() => {
			const selected = parseIsoDate(this.valueState());
			if (!selected) {
				return;
			}

			untracked(() => {
				this.viewYearState.set(selected.getFullYear());
				this.viewMonthState.set(selected.getMonth());
			});
		});
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

	protected togglePanel(): void {
		if (this.isDisabled()) {
			return;
		}

		if (this.openState()) {
			this.closePanel();
			return;
		}

		this.panelViewState.set('calendar');
		this.openState.set(true);
	}

	protected onTriggerKeydown(event: KeyboardEvent): void {
		if (this.isDisabled()) {
			return;
		}

		switch (event.key) {
			case 'ArrowDown':
			case 'Enter':
			case ' ':
				event.preventDefault();
				if (!this.openState()) {
					this.panelViewState.set('calendar');
					this.openState.set(true);
				}
				break;
			case 'Escape':
				if (this.openState()) {
					event.preventDefault();
					this.closePanel();
				}
				break;
		}
	}

	protected onHeaderLabelClick(): void {
		const view = this.panelViewState();

		if (view === 'calendar') {
			this.panelViewState.set('month');
			return;
		}

		if (view === 'month') {
			this.panelViewState.set('year');
		}
	}

	protected previousPage(): void {
		const view = this.panelViewState();

		if (view === 'calendar') {
			this.previousMonth();
			return;
		}

		if (view === 'month') {
			this.viewYearState.update((year) => year - 1);
			return;
		}

		this.viewYearState.update((year) => year - 12);
	}

	protected nextPage(): void {
		const view = this.panelViewState();

		if (view === 'calendar') {
			this.nextMonth();
			return;
		}

		if (view === 'month') {
			this.viewYearState.update((year) => year + 1);
			return;
		}

		this.viewYearState.update((year) => year + 12);
	}

	protected previousPageLabel(): string {
		const view = this.panelViewState();

		if (view === 'calendar') {
			return 'Previous month';
		}

		if (view === 'month') {
			return 'Previous year';
		}

		return 'Previous years';
	}

	protected nextPageLabel(): string {
		const view = this.panelViewState();

		if (view === 'calendar') {
			return 'Next month';
		}

		if (view === 'month') {
			return 'Next year';
		}

		return 'Next years';
	}

	protected selectMonth(month: number): void {
		this.viewMonthState.set(month);
		this.panelViewState.set('calendar');
	}

	protected selectYear(year: number): void {
		this.viewYearState.set(year);
		this.panelViewState.set('month');
	}

	protected isSelectedMonth(month: number): boolean {
		const selected = parseIsoDate(this.valueState());
		return (
			selected !== null &&
			selected.getFullYear() === this.viewYearState() &&
			selected.getMonth() === month
		);
	}

	protected isCurrentMonth(month: number): boolean {
		const today = new Date();
		return today.getFullYear() === this.viewYearState() && today.getMonth() === month;
	}

	protected isSelectedYear(year: number): boolean {
		const selected = parseIsoDate(this.valueState());
		return selected !== null && selected.getFullYear() === year;
	}

	protected isCurrentYear(year: number): boolean {
		return year === new Date().getFullYear();
	}

	protected selectDate(iso: string): void {
		this.valueState.set(iso);
		this.onChange(iso);
		this.markTouched();
		this.closePanel();
		this.focusTrigger();
	}

	protected selectToday(): void {
		const today = todayIso();
		if (this.todayDisabled()) {
			return;
		}

		this.selectDate(today);
	}

	protected closePanel(): void {
		if (!this.openState()) {
			return;
		}

		this.openState.set(false);
		this.panelViewState.set('calendar');
		this.markTouched();
	}

	protected isDisabled(): boolean {
		return this.disabled() || this.disabledState();
	}

	private previousMonth(): void {
		if (this.viewMonthState() === 0) {
			this.viewMonthState.set(11);
			this.viewYearState.update((year) => year - 1);
			return;
		}

		this.viewMonthState.update((month) => month - 1);
	}

	private nextMonth(): void {
		if (this.viewMonthState() === 11) {
			this.viewMonthState.set(0);
			this.viewYearState.update((year) => year + 1);
			return;
		}

		this.viewMonthState.update((month) => month + 1);
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
}
