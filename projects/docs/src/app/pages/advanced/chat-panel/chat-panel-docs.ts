import { Component, signal } from '@angular/core';
import {
	Button,
	ChatComposer,
	ChatIntro,
	ChatMessage,
	ChatPanel,
	ChatPrompt,
	ChatPromptSet,
	ChatWidget,
	Table,
} from 'plim-ui';

import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { CHAT_DOCS_TOKENS } from '../../../docs-component-tokens.config';

interface ChatPanelMessage {
	role: 'user' | 'assistant';
	text: string;
}

@Component({
	selector: 'app-chat-panel-docs',
	imports: [
		DocsA11yCallout,
		DocsComponentLayout,
		DocsTokenTable,
		Button,
		ChatComposer,
		ChatIntro,
		ChatMessage,
		ChatPanel,
		ChatPrompt,
		ChatPromptSet,
		ChatWidget,
		Table,
	],
	templateUrl: './chat-panel-docs.html',
	styleUrl: './chat-panel-docs.scss',
})
export class ChatPanelDocs {
	protected readonly tokens = CHAT_DOCS_TOKENS;
	protected readonly open = signal(false);
	protected readonly prompts = [
		'How do I use plimButton?',
		'Which tokens control theme colours?',
		'How do I install plim-ui?',
	];
	protected readonly messages = signal<ChatPanelMessage[]>([]);

	protected onSubmitted(question: string): void {
		this.messages.update((current) => [
			...current,
			{ role: 'user', text: question },
			{
				role: 'assistant',
				text: 'This demo echoes locally. Wire up your own assistant backend to answer questions about plim-ui.',
			},
		]);
	}
}
