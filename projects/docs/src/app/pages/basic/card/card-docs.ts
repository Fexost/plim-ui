import { Component } from '@angular/core';
import { Button, Card } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-card-docs',
	imports: [DocsComponentLayout, Card, Button],
	templateUrl: './card-docs.html',
	styleUrl: './card-docs.scss',
})
export class CardDocs {}
