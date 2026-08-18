import { Component } from '@angular/core';
import { Avatar } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-avatar-docs',
	imports: [DocsComponentLayout, Avatar],
	templateUrl: './avatar-docs.html',
})
export class AvatarDocs {}
