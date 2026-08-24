import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
	Component,
	DestroyRef,
	TemplateRef,
	ViewContainerRef,
	booleanAttribute,
	effect,
	inject,
	input,
	model,
	output,
	untracked,
	viewChild,
} from '@angular/core';

import { ChatLauncher } from './launcher/chat-launcher';

const CHAT_WIDGET_CLOSE_MS = 150;

@Component({
	selector: 'plim-chat-widget',
	imports: [CdkTrapFocus, ChatLauncher],
	templateUrl: './chat-widget.html',
	styleUrl: './chat-widget.scss',
	host: {
		class: 'plim-chat-widget-host',
		'[class.plim-chat-widget-host--with-launcher]': 'showLauncher()',
		'[class.plim-chat-widget-host--fixed]': 'fixed()',
	},
})
export class ChatWidget {
	private readonly overlay = inject(Overlay);
	private readonly viewContainerRef = inject(ViewContainerRef);
	private readonly panelTemplate = viewChild<TemplateRef<unknown>>('panel');

	private overlayRef: OverlayRef | null = null;
	private closeRequested = false;
	private closeTimer: ReturnType<typeof setTimeout> | null = null;

	public readonly open = model(false);
	public readonly fixed = input(true, { transform: booleanAttribute });
	public readonly showLauncher = input(true, { transform: booleanAttribute });
	public readonly launcherLabel = input('Chat');
	public readonly launcherAriaLabel = input<string | undefined>(undefined);
	public readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
	public readonly closed = output<void>();

	constructor() {
		inject(DestroyRef).onDestroy(() => {
			this.clearCloseTimer();
			this.detachOverlay();
		});

		effect(() => {
			const template = this.panelTemplate();
			const isOpen = this.open();

			untracked(() => {
				if (isOpen && template) {
					this.closeRequested = false;
					this.clearCloseTimer();

					if (this.overlayRef) {
						this.overlayRef.overlayElement
							.querySelector('.plim-chat-widget')
							?.classList.remove('plim-chat-widget--closing');
						return;
					}

					this.attachOverlay(template);
					return;
				}

				if (!isOpen && this.overlayRef) {
					this.animateClose();
				}
			});
		});
	}

	protected onLauncherActivate(): void {
		if (this.open()) {
			this.requestClose();
			return;
		}

		this.open.set(true);
	}

	protected requestClose(): void {
		if (this.closeRequested) {
			return;
		}

		this.closeRequested = true;
		this.open.set(false);
		this.closed.emit();
	}

	protected onPanelKeydown(event: KeyboardEvent): void {
		if (event.key !== 'Escape') {
			return;
		}

		event.preventDefault();
		this.requestClose();
	}

	private attachOverlay(template: TemplateRef<unknown>): void {
		if (this.overlayRef || !template) {
			return;
		}

		this.overlayRef = this.overlay.create({
			hasBackdrop: false,
			panelClass: 'plim-chat-widget-overlay',
			maxWidth: '100vw',
			scrollStrategy: this.overlay.scrollStrategies.noop(),
			positionStrategy: this.overlay
				.position()
				.global()
				.right('var(--plim-space-6)')
				.bottom('var(--plim-chat-widget-offset-bottom)'),
		});

		this.overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));
		this.overlayRef.keydownEvents().subscribe((event) => {
			if (event.key !== 'Escape') {
				return;
			}

			event.preventDefault();
			this.requestClose();
		});
	}

	private animateClose(): void {
		if (!this.overlayRef) {
			return;
		}

		const panel = this.overlayRef.overlayElement.querySelector('.plim-chat-widget');
		if (!panel) {
			this.detachOverlay();
			return;
		}

		panel.classList.add('plim-chat-widget--closing');
		this.clearCloseTimer();
		this.closeTimer = setTimeout(() => {
			this.detachOverlay();
			this.closeTimer = null;
		}, CHAT_WIDGET_CLOSE_MS);
	}

	private clearCloseTimer(): void {
		if (this.closeTimer === null) {
			return;
		}

		clearTimeout(this.closeTimer);
		this.closeTimer = null;
	}

	private detachOverlay(): void {
		this.overlayRef?.dispose();
		this.overlayRef = null;
	}
}
