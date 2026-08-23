import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

const ENHANCED = 'data-docs-scroll-region';

/** Scroll containers that use overflow in docs layouts. */
const SCROLL_REGION_SELECTOR = 'pre.docs-code, .docs-table-wrap, .docs-preview--scroll';

function enhanceScrollRegion(element: HTMLElement): void {
	if (element.getAttribute(ENHANCED) === 'true') {
		return;
	}

	element.tabIndex = 0;
	element.setAttribute(ENHANCED, 'true');
}

@Directive({
	selector: '[appDocsScrollRegion]',
})
export class DocsScrollRegionDirective implements AfterViewInit {
	private readonly host = inject(ElementRef<HTMLElement>);

	public ngAfterViewInit(): void {
		for (const element of this.host.nativeElement.querySelectorAll(SCROLL_REGION_SELECTOR)) {
			enhanceScrollRegion(element as HTMLElement);
		}
	}
}
