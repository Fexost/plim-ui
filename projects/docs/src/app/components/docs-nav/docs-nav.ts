import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DOCS_NAV } from '../../docs-nav.config';

@Component({
	selector: 'app-docs-nav',
	imports: [RouterLink, RouterLinkActive],
	template: `
		<nav class="docs-nav">
			@for (section of nav; track section.label) {
				<div>
					<p class="docs-nav-label">{{ section.label }}</p>
					<ul>
						@for (item of section.items; track item.path) {
							<li>
								<a [routerLink]="item.path" routerLinkActive="is-active">{{ item.label }}</a>
							</li>
						}
					</ul>
				</div>
			}
		</nav>
	`,
})
export class DocsNav {
	protected readonly nav = DOCS_NAV;
}
