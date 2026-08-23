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
	output,
	untracked,
	viewChild,
} from '@angular/core';

@Component({
	selector: 'plim-dialog',
	imports: [CdkTrapFocus],
	templateUrl: './dialog.html',
	styleUrl: './dialog.scss',
	host: {
		class: 'plim-dialog-host',
	},
})
export class Dialog {
	private readonly overlay = inject(Overlay);
	private readonly viewContainerRef = inject(ViewContainerRef);
	private readonly panelTemplate = viewChild<TemplateRef<unknown>>('panel');

	private overlayRef: OverlayRef | null = null;
	private closeRequested = false;

	public readonly open = input(false, { transform: booleanAttribute });
	public readonly ariaLabel = input<string | undefined>(undefined);
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
	}

	protected requestClose(): void {
		if (this.closeRequested) {
			return;
		}

		this.closeRequested = true;
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
		if (this.overlayRef) {
			return;
		}

		this.overlayRef = this.overlay.create({
			hasBackdrop: true,
			backdropClass: 'plim-dialog__backdrop',
			panelClass: 'plim-dialog-overlay',
			scrollStrategy: this.overlay.scrollStrategies.block(),
			positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
			maxWidth: 'calc(100vw - 2rem)',
		});

		this.overlayRef.attach(new TemplatePortal(template, this.viewContainerRef));
		this.overlayRef.backdropClick().subscribe(() => this.requestClose());
		this.overlayRef.keydownEvents().subscribe((event) => {
			if (event.key !== 'Escape') {
				return;
			}

			event.preventDefault();
			this.requestClose();
		});
	}

	private detachOverlay(): void {
		this.overlayRef?.dispose();
		this.overlayRef = null;
	}
}
