import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

import { hljs } from './docs-highlight-languages';

const HIGHLIGHTED = 'data-docs-highlighted';

function detectLanguage(text: string, explicit?: string): string {
	if (explicit) {
		return explicit;
	}

	const trimmed = text.trimStart();

	if (trimmed.startsWith('<')) {
		return 'html';
	}

	if (trimmed.startsWith('@use') || trimmed.startsWith('@import')) {
		return 'scss';
	}

	if (trimmed.startsWith('import ') || trimmed.includes('document.')) {
		return 'typescript';
	}

	if (/^(npm|git|cd)\b/.test(trimmed)) {
		return 'bash';
	}

	return 'plaintext';
}

function highlightPre(pre: HTMLElement): void {
	const code = pre.querySelector('code');

	if (!code || code.getAttribute(HIGHLIGHTED) === 'true') {
		return;
	}

	const text = code.textContent ?? '';
	const language = detectLanguage(text, pre.dataset['language']);
	const { value } = hljs.highlight(text, { language, ignoreIllegals: true });

	code.innerHTML = value;
	code.classList.add('hljs');
	code.setAttribute(HIGHLIGHTED, 'true');
}

@Directive({
	selector: '[appHighlightCode]',
})
export class DocsHighlightCodeDirective implements AfterViewInit {
	private readonly host = inject(ElementRef<HTMLElement>);

	public ngAfterViewInit(): void {
		for (const pre of this.host.nativeElement.querySelectorAll('pre.docs-code')) {
			highlightPre(pre as HTMLElement);
		}
	}
}
