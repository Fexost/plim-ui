import { CdkTrapFocus } from '@angular/cdk/a11y';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
	Component,
	DestroyRef,
	TemplateRef,
	ViewContainerRef,
	booleanAttribute,
	computed,
	effect,
	inject,
	input,
	output,
	signal,
	untracked,
	viewChild,
	viewChildren,
	ElementRef,
} from '@angular/core';

import { Input } from '../input/input';

export interface CommandPaletteItem {
	id: string;
	label: string;
	description?: string;
}

@Component({
	selector: 'plim-command-palette',
	imports: [CdkTrapFocus, Input],
	templateUrl: './command-palette.html',
	styleUrl: './command-palette.scss',
	host: {
		class: 'plim-command-palette-host',
	},
})
export class CommandPalette {
	private readonly overlay = inject(Overlay);
	private readonly viewContainerRef = inject(ViewContainerRef);
	private readonly document = inject(DOCUMENT);
	private readonly panelTemplate = viewChild<TemplateRef<unknown>>('panel');
	private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('queryInput');
	private readonly resultRefs = viewChildren<ElementRef<HTMLButtonElement>>('resultButton');

	private overlayRef: OverlayRef | null = null;
	private closeRequested = false;
	private triggerElement: HTMLElement | null = null;

	public readonly open = input(false, { transform: booleanAttribute });
	public readonly items = input<CommandPaletteItem[]>([]);
	public readonly query = input('');
	public readonly placeholder = input('Search…');
	public readonly ariaLabel = input('Command palette');
	public readonly emptyMessage = input('No results found.');
	public readonly queryChange = output<string>();
	public readonly selected = output<CommandPaletteItem>();
	public readonly closed = output<void>();

	protected readonly activeIndex = signal(0);

	protected readonly activeDescendantId = computed(() => {
		const item = this.items()[this.activeIndex()];

		return item ? this.resultOptionId(this.activeIndex()) : null;
	});

	constructor() {
		inject(DestroyRef).onDestroy(() => {
			this.document.body.style.overflow = '';
			this.detachOverlay();
		});

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

		effect(() => {
			if (!this.open()) {
				this.activeIndex.set(0);
				return;
			}

			const count = this.items().length;
			const index = this.activeIndex();

			if (count === 0) {
				this.activeIndex.set(0);
				return;
			}

			if (index >= count) {
				this.activeIndex.set(count - 1);
			}
		});

		effect(() => {
			if (!this.open()) {
				return;
			}

			this.activeIndex();
			this.items();

			queueMicrotask(() => {
				const element = this.resultRefs()[this.activeIndex()]?.nativeElement;

				element?.scrollIntoView?.({ block: 'nearest' });
			});
		});
	}

	protected onQueryInput(event: Event): void {
		this.activeIndex.set(0);
		this.queryChange.emit((event.target as HTMLInputElement).value);
	}

	protected onPanelKeydown(event: KeyboardEvent): void {
		const items = this.items();

		if (event.key === 'Escape') {
			event.preventDefault();
			this.requestClose();
			return;
		}

		if (event.key === 'ArrowDown') {
			if (items.length === 0) {
				return;
			}

			event.preventDefault();
			this.activeIndex.update((index) => (index + 1) % items.length);
			return;
		}

		if (event.key === 'ArrowUp') {
			if (items.length === 0) {
				return;
			}

			event.preventDefault();
			this.activeIndex.update((index) => (index <= 0 ? items.length - 1 : index - 1));
			return;
		}

		if (event.key === 'Enter') {
			const item = items[this.activeIndex()];

			if (item) {
				event.preventDefault();
				this.selectItem(item);
			}
		}
	}

	protected setActiveIndex(index: number): void {
		this.activeIndex.set(index);
	}

	protected resultOptionId(index: number): string {
		return `plim-command-palette-option-${index}`;
	}

	protected selectItem(item: CommandPaletteItem): void {
		this.selected.emit(item);
	}

	private requestClose(): void {
		if (this.closeRequested) {
			return;
		}

		this.closeRequested = true;
		this.closed.emit();
	}

	private attachOverlay(template: TemplateRef<unknown>): void {
		if (this.overlayRef) {
			queueMicrotask(() => this.focusQueryInput());
			return;
		}

		this.triggerElement =
			this.document.activeElement instanceof HTMLElement ? this.document.activeElement : null;
		this.document.body.style.overflow = 'hidden';

		this.overlayRef = this.overlay.create({
			hasBackdrop: true,
			backdropClass: 'plim-command-palette__backdrop',
			panelClass: 'plim-command-palette-overlay',
			scrollStrategy: this.overlay.scrollStrategies.block(),
			positionStrategy: this.overlay
				.position()
				.global()
				.centerHorizontally()
				.top('var(--plim-command-palette-offset, calc(var(--plim-header-height, 4rem) + 2.5rem))'),
			width: 'min(36rem, calc(100vw - 2rem))',
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

		queueMicrotask(() => this.focusQueryInput());
	}

	private detachOverlay(): void {
		this.overlayRef?.dispose();
		this.overlayRef = null;
		this.document.body.style.overflow = '';
		this.restoreTriggerFocus();
	}

	private focusQueryInput(): void {
		this.inputRef()?.nativeElement?.focus();
	}

	private restoreTriggerFocus(): void {
		const trigger = this.triggerElement;
		this.triggerElement = null;

		if (trigger?.isConnected) {
			trigger.focus({ preventScroll: true });
		}
	}
}
