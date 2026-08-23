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
	numberAttribute,
	output,
	untracked,
	viewChild,
} from '@angular/core';

export type SnackbarAriaLive = 'polite' | 'assertive' | 'off';
export type SnackbarVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

@Component({
	selector: 'plim-snackbar',
	templateUrl: './snackbar.html',
	styleUrl: './snackbar.scss',
	host: {
		class: 'plim-snackbar-host',
	},
})
export class Snackbar {
	private readonly overlay = inject(Overlay);
	private readonly viewContainerRef = inject(ViewContainerRef);
	private readonly panelTemplate = viewChild<TemplateRef<unknown>>('panel');

	private overlayRef: OverlayRef | null = null;
	private closeRequested = false;

	public readonly open = input(false, { transform: booleanAttribute });
	public readonly duration = input(4000, { transform: numberAttribute });
	public readonly variant = input<SnackbarVariant>('default');
	public readonly ariaLive = input<SnackbarAriaLive>('polite');
	public readonly closed = output<void>();

	constructor() {
		inject(DestroyRef).onDestroy(() => this.detachOverlay());

		effect(() => {
			const template = this.panelTemplate();
			const isOpen = this.open();

			untracked(() => {
				if (isOpen && template) {
					this.closeRequested = false;
					this.attachOverlay(template);
					return;
				}

				this.detachOverlay();
			});
		});

		effect((onCleanup) => {
			const isOpen = this.open();
			const duration = this.duration();

			if (!isOpen || duration <= 0) {
				return;
			}

			const timer = window.setTimeout(() => this.requestClose(), duration);
			onCleanup(() => window.clearTimeout(timer));
		});
	}

	protected requestClose(): void {
		if (this.closeRequested) {
			return;
		}

		this.closeRequested = true;
		this.closed.emit();
	}

	private attachOverlay(template: TemplateRef<unknown>): void {
		if (this.overlayRef) {
			return;
		}

		this.overlayRef = this.overlay.create({
			hasBackdrop: false,
			panelClass: 'plim-snackbar-overlay',
			scrollStrategy: this.overlay.scrollStrategies.noop(),
			positionStrategy: this.overlay
				.position()
				.global()
				.centerHorizontally()
				.bottom('var(--plim-space-6)'),
		});

		this.overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));
	}

	private detachOverlay(): void {
		this.overlayRef?.dispose();
		this.overlayRef = null;
	}
}
