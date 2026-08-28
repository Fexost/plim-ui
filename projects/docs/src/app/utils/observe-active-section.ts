import { WritableSignal } from '@angular/core';

const ACTIVE_SECTION_OBSERVER_OPTIONS: IntersectionObserverInit = {
	rootMargin: '-20% 0px -55% 0px',
	threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
};

export function observeActiveSection(
	sections: NodeListOf<HTMLElement>,
	activeSection: WritableSignal<string>,
): IntersectionObserver | undefined {
	if (sections.length === 0) {
		return undefined;
	}

	activeSection.set(sections[0]?.id ?? '');

	const observer = new IntersectionObserver((entries) => {
		const visible = entries
			.filter((entry) => entry.isIntersecting)
			.sort((left, right) => right.intersectionRatio - left.intersectionRatio);

		const active = visible[0]?.target;

		if (active instanceof HTMLElement && active.id) {
			activeSection.set(active.id);
		}
	}, ACTIVE_SECTION_OBSERVER_OPTIONS);

	for (const section of sections) {
		observer.observe(section);
	}

	return observer;
}
