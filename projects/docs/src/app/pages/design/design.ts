import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocsGuideLayout } from '../../components/docs-guide-layout/docs-guide-layout';
import { DOCS_PATHS } from '../../docs-nav.config';

const PLIM_DESIGN = 'https://github.com/Fexost/plim-design';
const PLIM_DESIGN_REF = `${PLIM_DESIGN}/blob/v1.0.0`;

@Component({
	selector: 'app-design-docs',
	imports: [DocsGuideLayout, RouterLink],
	templateUrl: './design.html',
})
export class DesignDocs {
	protected readonly DOCS_PATHS = DOCS_PATHS;
	protected readonly repository = PLIM_DESIGN;
	protected readonly philosophy = `${PLIM_DESIGN_REF}/philosophy/philosophy.md`;
	protected readonly manifesto = `${PLIM_DESIGN_REF}/philosophy/manifesto.md`;
	protected readonly skills = `${PLIM_DESIGN_REF}/skills`;

	protected readonly toc = [
		{ id: 'philosophy', label: 'Philosophy' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'library', label: 'This library' },
	];
}
