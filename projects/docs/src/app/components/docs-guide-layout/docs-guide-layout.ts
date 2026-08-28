import {
	AfterViewInit,
	Component,
	ElementRef,
	inject,
	input,
	OnDestroy,
	signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Separator } from 'plim-ui';

import { DOCS_PAGE_HOST_DIRECTIVES } from '../../directives/docs-page-host-directives';
import {
	ActiveSectionObserver,
	GUIDE_SECTION_SELECTOR,
	observeActiveSection,
} from '../../utils/observe-active-section';

export interface DocsGuideTocSection {
	id: string;
	label: string;
}

@Component({
	selector: 'app-docs-guide-layout',
	hostDirectives: DOCS_PAGE_HOST_DIRECTIVES,
	imports: [RouterLink, Separator],
	templateUrl: './docs-guide-layout.html',
	styleUrl: './docs-guide-layout.scss',
})
export class DocsGuideLayout implements AfterViewInit, OnDestroy {
	private readonly host = inject(ElementRef<HTMLElement>);
	private sectionObserver?: ActiveSectionObserver;

	public readonly section = input.required<string>();
	public readonly title = input.required<string>();
	public readonly parentPath = input<string>();
	public readonly toc = input<DocsGuideTocSection[]>([]);

	protected readonly activeTocSection = signal('');

	public ngAfterViewInit(): void {
		if (this.toc().length === 0) {
			return;
		}

		this.sectionObserver = observeActiveSection(
			this.host.nativeElement.querySelectorAll(
				GUIDE_SECTION_SELECTOR,
			) as NodeListOf<HTMLElement>,
			this.activeTocSection,
		);
	}

	public ngOnDestroy(): void {
		this.sectionObserver?.disconnect();
	}
}
