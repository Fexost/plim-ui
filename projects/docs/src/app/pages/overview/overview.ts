import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from 'plim-ui';

import { DOCS_PATHS } from '../../docs-nav.config';

@Component({
	selector: 'app-overview',
	imports: [RouterLink, Button],
	templateUrl: './overview.html',
	styleUrl: './overview.scss',
})
export class Overview {
	protected readonly paths = DOCS_PATHS;
}
