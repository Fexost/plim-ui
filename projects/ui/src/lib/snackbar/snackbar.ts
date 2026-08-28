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
	public readonly stackIndex = input(0, { transform: numberAttribute });
	public readonly closed = output<void>();

	constructor() {
		inject(DestroyRef).onDestroy(() => this.detachOverlay());

		effect(() => {
			const template = this.panelTemplate();
			const isOpen = this.open();
			const stackIndex = this.stackIndex();

			untracked(() => {
				if (isOpen && template) {
					this.closeRequested = false;
					this.attachOverlay(template, stackIndex);
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

	private attachOverlay(template: TemplateRef<unknown>, stackIndex: number): void {
		if (this.overlayRef) {
			this.overlayRef.updatePositionStrategy(
				this.overlay
					.position()
					.global()
					.centerHorizontally()
					.bottom(this.getBottomOffset(stackIndex)),
			);
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
				.bottom(this.getBottomOffset(stackIndex)),
		});

		this.overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));
	}

	private getBottomOffset(stackIndex: number): string {
		if (stackIndex <= 0) {
			return 'var(--plim-space-6)';
		}

		return `calc(var(--plim-space-6) + ${stackIndex} * var(--plim-snackbar-stack-gap))`;
	}

	private detachOverlay(): void {
		this.overlayRef?.dispose();
		this.overlayRef = null;
	}
}
