export function parseTimeValue(value: string | null | undefined): { hour: number; minute: number } | null {
	if (!value) {
		return null;
	}

	const match = /^(\d{2}):(\d{2})$/.exec(value);
	if (!match) {
		return null;
	}

	const hour = Number(match[1]);
	const minute = Number(match[2]);

	if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
		return null;
	}

	return { hour, minute };
}

export function parseTimeInput(value: string): { hour: number; minute: number } | null {
	const trimmed = value.trim();
	if (!trimmed) {
		return null;
	}

	const colonMatch = /^(\d{1,2}):(\d{2})$/.exec(trimmed);
	if (colonMatch) {
		const hour = Number(colonMatch[1]);
		const minute = Number(colonMatch[2]);

		if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
			return { hour, minute };
		}
	}

	return null;
}

/** Restrict typing to HH:MM with up to two digits per side. */
export function formatTimeInputValue(raw: string): string {
	const digits = raw.replace(/\D/g, '').slice(0, 4);

	if (digits.length <= 2) {
		return digits;
	}

	return `${digits.slice(0, 2)}:${digits.slice(2)}`;
}

export function formatTimeValue(hour: number, minute: number): string {
	return `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
}

export function formatDisplayTime(value: string | null): string {
	const parsed = parseTimeValue(value);
	if (!parsed) {
		return '';
	}

	return formatTimeValue(parsed.hour, parsed.minute);
}

export function buildHourOptions(): number[] {
	return Array.from({ length: 24 }, (_, index) => index);
}

export function buildMinuteOptions(step = 1): number[] {
	const safeStep = Math.max(1, Math.min(step, 30));
	const options: number[] = [];

	for (let minute = 0; minute < 60; minute += safeStep) {
		options.push(minute);
	}

	return options;
}
