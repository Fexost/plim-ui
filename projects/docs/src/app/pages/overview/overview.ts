import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Badge, Button, Card } from 'plim-ui';

import { DOCS_PAGE_HOST_DIRECTIVES } from '../../directives/docs-page-host-directives';
import { DOCS_PATHS } from '../../docs-nav.config';

@Component({
	selector: 'app-overview',
	hostDirectives: DOCS_PAGE_HOST_DIRECTIVES,
	imports: [RouterLink, Badge, Button, Card],
	templateUrl: './overview.html',
	styleUrl: './overview.scss',
})
export class Overview {
	protected readonly DOCS_PATHS = DOCS_PATHS;
}
