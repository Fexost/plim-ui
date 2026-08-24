import {
	afterNextRender,
	afterRenderEffect,
	Component,
	DestroyRef,
	ElementRef,
	inject,
	input,
	viewChild,
} from '@angular/core';

@Component({
	selector: 'plim-chat-panel',
	host: {
		class: 'plim-chat-panel',
	},
	templateUrl: './chat-panel.html',
	styleUrl: './chat-panel.scss',
})
export class ChatPanel {
	private readonly destroyRef = inject(DestroyRef);
	private readonly messagesRegion = viewChild<ElementRef<HTMLElement>>('messagesRegion');

	public readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
	public readonly messagesLabel = input('Messages');

	constructor() {
		afterRenderEffect(() => this.scrollMessagesToBottom());

		afterNextRender(() => {
			const region = this.messagesRegion()?.nativeElement;
			if (!region) {
				return;
			}

			const observer = new MutationObserver(() => this.scrollMessagesToBottom());
			observer.observe(region, { childList: true, subtree: true, characterData: true });

			const resizeObserver = new ResizeObserver(() => this.scrollMessagesToBottom());
			resizeObserver.observe(region);

			const slot = region.querySelector('[plimChatPanelMessages]');
			if (slot) {
				resizeObserver.observe(slot);
			}

			this.destroyRef.onDestroy(() => {
				observer.disconnect();
				resizeObserver.disconnect();
			});
		});
	}

	private scrollMessagesToBottom(): void {
		const region = this.messagesRegion()?.nativeElement;
		if (!region) {
			return;
		}

		requestAnimationFrame(() => {
			region.scrollTop = Math.max(0, region.scrollHeight - region.clientHeight);
		});
	}
}
