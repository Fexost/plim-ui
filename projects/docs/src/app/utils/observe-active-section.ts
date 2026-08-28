import { WritableSignal } from '@angular/core';

export interface ActiveSectionObserver {
	disconnect(): void;
}

const GUIDE_SECTION_SELECTOR = '.docs-section[id], .docs-principles[id]';
const COMPONENT_SECTION_SELECTOR = '.docs-component__section[id]';

function resolveScrollOffset(): number {
	const rootStyles = getComputedStyle(document.documentElement);
	const topbar = document.querySelector('app-docs-topbar');
	const topbarHeight =
		topbar instanceof HTMLElement ? topbar.getBoundingClientRect().height : 56;
	const sectionGap = Number.parseFloat(rootStyles.getPropertyValue('--plim-space-6')) || 24;

	return topbarHeight + sectionGap;
}

function updateActiveSection(
	sections: readonly HTMLElement[],
	activeSection: WritableSignal<string>,
): void {
	if (sections.length === 0) {
		return;
	}

	const offset = resolveScrollOffset();
	let current = sections[0]?.id ?? '';

	for (const section of sections) {
		if (section.getBoundingClientRect().top - offset <= 1) {
			current = section.id;
			continue;
		}

		break;
	}

	if (activeSection() !== current) {
		activeSection.set(current);
	}
}

export function observeActiveSection(
	sections: NodeListOf<HTMLElement>,
	activeSection: WritableSignal<string>,
): ActiveSectionObserver | undefined {
	if (sections.length === 0) {
		return undefined;
	}

	const sectionList = Array.from(sections);
	activeSection.set(sectionList[0]?.id ?? '');

	const onScroll = () => {
		updateActiveSection(sectionList, activeSection);
	};

	onScroll();
	window.addEventListener('scroll', onScroll, { passive: true });
	window.addEventListener('resize', onScroll, { passive: true });

	return {
		disconnect: () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
		},
	};
}

export { COMPONENT_SECTION_SELECTOR, GUIDE_SECTION_SELECTOR };
