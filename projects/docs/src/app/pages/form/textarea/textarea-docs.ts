import { Component } from '@angular/core';
import { Textarea } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-textarea-docs',
	imports: [DocsComponentLayout, Textarea],
	templateUrl: './textarea-docs.html',
})
export class TextareaDocs {}
