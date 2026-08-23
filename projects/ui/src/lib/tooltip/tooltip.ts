import {
	ConnectedPosition,
	Overlay,
	OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
	Component,
	ComponentRef,
	DestroyRef,
	Directive,
	ElementRef,
	computed,
	effect,
	inject,
	input,
	signal,
	untracked,
} from '@angular/core';

export type TooltipPosition = 'above' | 'below';

const TOOLTIP_POSITION_ABOVE: ConnectedPosition = {
	originX: 'center',
	originY: 'top',
	overlayX: 'center',
	overlayY: 'bottom',
	offsetY: -8,
};

const TOOLTIP_POSITION_BELOW: ConnectedPosition = {
	originX: 'center',
	originY: 'bottom',
	overlayX: 'center',
	overlayY: 'top',
	offsetY: 8,
};

@Component({
	template: '{{ text() }}',
	host: {
		class: 'plim-tooltip',
		role: 'tooltip',
		'[id]': 'panelId()',
	},
})
class TooltipPanel {
	public readonly text = input('');
	public readonly panelId = input('');
}

@Directive({
	selector: '[plimTooltip]',
	host: {
		class: 'plim-tooltip-host',
		'(pointerenter)': 'onPointerEnter()',
		'(pointerleave)': 'onPointerLeave()',
		'(focusin)': 'onFocus()',
		'(focusout)': 'onBlur()',
		'[attr.aria-describedby]': 'describedBy()',
	},
})
export class Tooltip {
	private static nextId = 0;

	private readonly overlay = inject(Overlay);
	private readonly elementRef = inject(ElementRef<HTMLElement>);
	private readonly destroyRef = inject(DestroyRef);

	private overlayRef: OverlayRef | null = null;
	private panelRef: ComponentRef<TooltipPanel> | null = null;

	private readonly hovered = signal(false);
	private readonly focused = signal(false);

	private readonly tooltipId = `plim-tooltip-${Tooltip.nextId++}`;

	public readonly plimTooltip = input('');
	public readonly tooltipPosition = input<TooltipPosition>('below', {
		alias: 'plimTooltipPosition',
	});

	private readonly open = computed(
		() => !!this.plimTooltip() && (this.hovered() || this.focused()),
	);

	protected readonly describedBy = computed(() => (this.open() ? this.tooltipId : null));

	constructor() {
		this.destroyRef.onDestroy(() => this.detachOverlay());

		effect(() => {
			const isOpen = this.open();
			const message = this.plimTooltip();
			const positions = this.overlayPositions();

			untracked(() => {
				if (isOpen && message) {
					this.attachOverlay(message, positions);
					return;
				}

				this.detachOverlay();
			});
		});
	}

	public onPointerEnter(): void {
		this.hovered.set(true);
	}

	public onPointerLeave(): void {
		this.hovered.set(false);
	}

	public onFocus(): void {
		this.focused.set(true);
	}

	public onBlur(): void {
		this.focused.set(false);
	}

	private overlayPositions(): ConnectedPosition[] {
		return this.tooltipPosition() === 'above'
			? [TOOLTIP_POSITION_ABOVE, TOOLTIP_POSITION_BELOW]
			: [TOOLTIP_POSITION_BELOW, TOOLTIP_POSITION_ABOVE];
	}

	private attachOverlay(message: string, positions: ConnectedPosition[]): void {
		if (this.overlayRef?.hasAttached()) {
			this.panelRef?.setInput('text', message);
			this.panelRef?.setInput('panelId', this.tooltipId);
			this.overlayRef.updatePositionStrategy(
				this.overlay
					.position()
					.flexibleConnectedTo(this.elementRef)
					.withPositions(positions)
					.withPush(true),
			);
			this.overlayRef.updatePosition();
			return;
		}

		this.overlayRef = this.overlay.create({
			positionStrategy: this.overlay
				.position()
				.flexibleConnectedTo(this.elementRef)
				.withPositions(positions)
				.withPush(true),
			scrollStrategy: this.overlay.scrollStrategies.reposition(),
		});

		this.panelRef = this.overlayRef.attach(new ComponentPortal(TooltipPanel));
		this.panelRef.setInput('text', message);
		this.panelRef.setInput('panelId', this.tooltipId);
	}

	private detachOverlay(): void {
		this.overlayRef?.dispose();
		this.overlayRef = null;
		this.panelRef = null;
	}
}
