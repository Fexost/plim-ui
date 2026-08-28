import {
	AfterViewInit,
	Component,
	computed,
	ElementRef,
	inject,
	input,
	OnDestroy,
	signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Badge, Button, Card, Separator } from 'plim-ui';

import { getDocsCategoryPath } from '../../docs-nav.config';
import { DOCS_PAGE_HOST_DIRECTIVES } from '../../directives/docs-page-host-directives';

@Component({
	selector: 'app-docs-component-layout',
	hostDirectives: DOCS_PAGE_HOST_DIRECTIVES,
	imports: [RouterLink, Badge, Button, Card, Separator],
	templateUrl: './docs-component-layout.html',
	styleUrl: './docs-component-layout.scss',
})
export class DocsComponentLayout implements AfterViewInit, OnDestroy {
	private readonly host = inject(ElementRef<HTMLElement>);
	private sectionObserver?: IntersectionObserver;

	public readonly category = input.required<string>();
	public readonly title = input.required<string>();
	/** When set, shows that the component builds on a native HTML element. */
	public readonly nativeElement = input<string>();

	protected readonly categoryPath = computed(() => getDocsCategoryPath(this.category()));
	protected readonly activeJumpSection = signal('preview');

	protected readonly jumpSections = [
		{ id: 'preview', label: 'Preview' },
		{ id: 'accessibility', label: 'Accessibility' },
		{ id: 'tokens', label: 'Design tokens' },
		{ id: 'api', label: 'API reference' },
	];

	public ngAfterViewInit(): void {
		this.observeJumpSections();
	}

	public ngOnDestroy(): void {
		this.sectionObserver?.disconnect();
	}

	protected isJumpSectionActive(sectionId: string): boolean {
		return this.activeJumpSection() === sectionId;
	}

	private observeJumpSections(): void {
		const sections = this.host.nativeElement.querySelectorAll(
			'.docs-component__section[id]',
		) as NodeListOf<HTMLElement>;

		if (sections.length === 0) {
			return;
		}

		this.sectionObserver = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((left, right) => right.intersectionRatio - left.intersectionRatio);

				const active = visible[0]?.target;

				if (active instanceof HTMLElement && active.id) {
					this.activeJumpSection.set(active.id);
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
