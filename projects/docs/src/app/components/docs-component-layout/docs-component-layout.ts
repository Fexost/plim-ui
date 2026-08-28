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
import { Badge, Card, Separator } from 'plim-ui';

import { DOCS_COMPONENT_JUMP_SECTIONS } from '../../docs-component-layout.config';
import { getDocsCategoryPath } from '../../docs-nav.config';
import { DOCS_PAGE_HOST_DIRECTIVES } from '../../directives/docs-page-host-directives';
import { observeActiveSection } from '../../utils/observe-active-section';

@Component({
	selector: 'app-docs-component-layout',
	hostDirectives: DOCS_PAGE_HOST_DIRECTIVES,
	imports: [RouterLink, Badge, Card, Separator],
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
	protected readonly activeJumpSection = signal('');
	protected readonly jumpSections = DOCS_COMPONENT_JUMP_SECTIONS;

	public ngAfterViewInit(): void {
		this.sectionObserver = observeActiveSection(
			this.host.nativeElement.querySelectorAll(
				'.docs-component__section[id]',
			) as NodeListOf<HTMLElement>,
			this.activeJumpSection,
		);
	}

	public ngOnDestroy(): void {
		this.sectionObserver?.disconnect();
	}
}
