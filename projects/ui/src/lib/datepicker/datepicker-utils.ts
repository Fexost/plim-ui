export interface CalendarDay {
	date: number;
	iso: string;
	inMonth: boolean;
	isToday: boolean;
	isSelected: boolean;
	isDisabled: boolean;
}

const WEEKDAY_LABELS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'] as const;

export function weekdayLabels(): readonly string[] {
	return WEEKDAY_LABELS;
}

export function formatIsoDate(year: number, month: number, day: number): string {
	const paddedMonth = String(month + 1).padStart(2, '0');
	const paddedDay = String(day).padStart(2, '0');
	return `${year}-${paddedMonth}-${paddedDay}`;
}

export function parseIsoDate(value: string | null | undefined): Date | null {
	if (!value) {
		return null;
	}

	const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
	if (!match) {
		return null;
	}

	const year = Number(match[1]);
	const month = Number(match[2]) - 1;
	const day = Number(match[3]);
	const date = new Date(year, month, day);

	if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
		return null;
	}

	return date;
}

export function formatDisplayDate(value: string | null, locale = 'en-GB'): string {
	const date = parseIsoDate(value);
	if (!date) {
		return '';
	}

	return new Intl.DateTimeFormat(locale, {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	}).format(date);
}

export function monthYearLabel(year: number, month: number, locale = 'en-GB'): string {
	const monthPart = new Intl.DateTimeFormat(locale, { month: 'short' })
		.format(new Date(year, month, 1))
		.replace('.', '')
		.toUpperCase();

	return `${monthPart} ${year}`;
}

export function monthShortLabels(locale = 'en-GB'): string[] {
	return Array.from({ length: 12 }, (_, month) =>
		new Intl.DateTimeFormat(locale, { month: 'short' }).format(new Date(2000, month, 1)),
	);
}

export function yearPageLabel(startYear: number): string {
	return `${startYear} – ${startYear + 11}`;
}

export function buildYearPage(viewYear: number): number[] {
	const startYear = Math.floor(viewYear / 12) * 12;
	return Array.from({ length: 12 }, (_, index) => startYear + index);
}

export function todayIso(): string {
	const today = new Date();
	return formatIsoDate(today.getFullYear(), today.getMonth(), today.getDate());
}

export function isDateDisabled(
	iso: string,
	min?: string | null,
	max?: string | null,
): boolean {
	if (min && compareIso(iso, min) < 0) {
		return true;
	}

	if (max && compareIso(iso, max) > 0) {
		return true;
	}

	return false;
}

function compareIso(left: string, right: string): number {
	return left.localeCompare(right);
}

export function buildCalendarMonth(
	viewYear: number,
	viewMonth: number,
	selected: string | null,
	min?: string | null,
	max?: string | null,
): CalendarDay[] {
	const today = new Date();
	const todayIso = formatIsoDate(today.getFullYear(), today.getMonth(), today.getDate());
	const firstOfMonth = new Date(viewYear, viewMonth, 1);
	const startOffset = firstOfMonth.getDay();
	const gridStart = new Date(viewYear, viewMonth, 1 - startOffset);
	const days: CalendarDay[] = [];

	for (let index = 0; index < 42; index += 1) {
		const current = new Date(gridStart.getFullYear(), gridStart.getMonth(), gridStart.getDate() + index);
		const iso = formatIsoDate(current.getFullYear(), current.getMonth(), current.getDate());
		const inMonth = current.getMonth() === viewMonth;
		let isDisabled = false;

		if (min && compareIso(iso, min) < 0) {
			isDisabled = true;
		}

		if (max && compareIso(iso, max) > 0) {
			isDisabled = true;
		}

		days.push({
			date: current.getDate(),
			iso,
			inMonth,
			isToday: iso === todayIso,
			isSelected: iso === selected,
			isDisabled,
		});
	}

	return days;
}
