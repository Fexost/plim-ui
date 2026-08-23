import { OverlayModule, STANDARD_DROPDOWN_BELOW_POSITIONS } from '@angular/cdk/overlay';
import { Component, ElementRef, signal } from '@angular/core';

@Component({
	selector: 'plim-menu',
	imports: [OverlayModule],
	templateUrl: './menu.html',
	styleUrl: './menu.scss',
	host: {
		class: 'plim-menu',
		'(document:keydown)': 'onDocumentKeydown($event)',
	},
})
export class Menu {
	private static nextId = 0;

	public readonly panelId = `plim-menu-panel-${Menu.nextId++}`;
	protected readonly overlayPositions = STANDARD_DROPDOWN_BELOW_POSITIONS;

	private readonly openState = signal(false);
	private readonly originState = signal<ElementRef<HTMLElement> | null>(null);
	private triggerElement: HTMLElement | null = null;

	protected readonly panelOpen = this.openState.asReadonly();
	protected readonly overlayOrigin = this.originState.asReadonly();

	public isOpen(): boolean {
		return this.openState();
	}

	public toggle(origin: ElementRef<HTMLElement>): void {
		if (this.openState()) {
			this.close();
			return;
		}

		this.open(origin);
	}

	public open(origin: ElementRef<HTMLElement>): void {
		this.triggerElement = origin.nativeElement;
		this.originState.set(origin);
		this.openState.set(true);
		this.focusFirstItem();
	}

	public close(): void {
		if (!this.openState()) {
			return;
		}

		this.openState.set(false);
		this.triggerElement?.focus();
	}

	protected onDocumentKeydown(event: KeyboardEvent): void {
		if (event.key !== 'Escape' || !this.openState()) {
			return;
		}

		event.preventDefault();
		this.close();
	}

	protected onPanelKeydown(event: KeyboardEvent): void {
		if (event.key === 'Escape') {
			event.preventDefault();
			this.close();
		}
	}

	private focusFirstItem(): void {
		queueMicrotask(() => {
			const panel = document.getElementById(this.panelId);
			const item = panel?.querySelector<HTMLButtonElement>('.plim-menu-item:not(:disabled)');
			item?.focus();
		});
	}
}
