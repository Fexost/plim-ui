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
	private sectionObserver?: IntersectionObserver;

	public readonly section = input.required<string>();
	public readonly title = input.required<string>();
	public readonly parentPath = input<string>();
	public readonly toc = input<DocsGuideTocSection[]>([]);

	protected readonly activeTocSection = signal('');

	public ngAfterViewInit(): void {
		if (this.toc().length > 0) {
			this.observeTocSections();
		}
	}

	public ngOnDestroy(): void {
		this.sectionObserver?.disconnect();
	}

	protected isTocSectionActive(sectionId: string): boolean {
		return this.activeTocSection() === sectionId;
	}

	private observeTocSections(): void {
		const sections = this.host.nativeElement.querySelectorAll(
			'.docs-section[id]',
		) as NodeListOf<HTMLElement>;

		if (sections.length === 0) {
			return;
		}

		this.activeTocSection.set(sections[0]?.id ?? '');

		this.sectionObserver = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((left, right) => right.intersectionRatio - left.intersectionRatio);

				const active = visible[0]?.target;

				if (active instanceof HTMLElement && active.id) {
					this.activeTocSection.set(active.id);
				}
			},
			{
				rootMargin: '-20% 0px -55% 0px',
				threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
			},
		);

		for (const section of sections) {
			this.sectionObserver.observe(section);
		}
	}
}
