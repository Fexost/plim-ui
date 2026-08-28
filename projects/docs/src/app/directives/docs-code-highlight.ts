import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

import { hljs } from './docs-highlight-languages';

const HIGHLIGHTED = 'data-docs-highlighted';
const COPY_LABEL = 'Copy code';
const COPIED_LABEL = 'Copied';
const SUPPORTED_LANGUAGES = new Set(['html', 'xml', 'typescript', 'javascript', 'scss', 'bash', 'shell']);

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

	if (!SUPPORTED_LANGUAGES.has(language)) {
		code.setAttribute(HIGHLIGHTED, 'true');
		return;
	}

	const { value } = hljs.highlight(text, { language, ignoreIllegals: true });

	code.innerHTML = value;
	code.classList.add('hljs');
	code.setAttribute(HIGHLIGHTED, 'true');
}

async function copyCode(pre: HTMLElement, button: HTMLButtonElement): Promise<void> {
	const code = pre.querySelector('code');
	const text = code?.textContent ?? '';

	if (!text) {
		return;
	}

	try {
		await navigator.clipboard.writeText(text);
		button.textContent = COPIED_LABEL;
		window.setTimeout(() => {
			button.textContent = COPY_LABEL;
		}, 2000);
	} catch {
		button.textContent = 'Copy failed';
		window.setTimeout(() => {
			button.textContent = COPY_LABEL;
		}, 2000);
	}
}

function addCopyButton(pre: HTMLElement): void {
	if (pre.querySelector('.docs-code__copy')) {
		return;
	}

	pre.classList.add('docs-code--copyable');

	const button = document.createElement('button');
	button.type = 'button';
	button.className = 'docs-code__copy';
	button.textContent = COPY_LABEL;
	button.addEventListener('click', () => {
		void copyCode(pre, button);
	});

	pre.append(button);
}

@Directive({
	selector: '[appHighlightCode]',
})
export class DocsHighlightCodeDirective implements AfterViewInit {
	private readonly host = inject(ElementRef<HTMLElement>);

	public ngAfterViewInit(): void {
		for (const pre of this.host.nativeElement.querySelectorAll('pre.docs-code')) {
			const element = pre as HTMLElement;
			highlightPre(element);
			addCopyButton(element);
		}
	}
}
