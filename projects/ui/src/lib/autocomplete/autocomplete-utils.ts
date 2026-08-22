export interface AutocompleteOptionView {
	value: string;
	label: string;
	disabled: boolean;
}

export function visibleAutocompleteOptions(
	options: AutocompleteOptionView[],
	query: string,
	filtering: boolean,
	limit: number,
): AutocompleteOptionView[] {
	const selectable = options.filter((option) => !option.disabled);
	const max = Math.max(limit, 0);

	if (!filtering) {
		return selectable.slice(0, max);
	}

	const normalized = query.trim().toLowerCase();
	const matches = normalized
		? selectable.filter((option) => option.label.toLowerCase().includes(normalized))
		: selectable;

	return matches.slice(0, max);
}

export function nextActiveIndex(current: number, delta: number, count: number): number {
	if (count === 0) {
		return 0;
	}

	return (current + delta + count) % count;
}
