import { Component, contentChildren, effect, model, untracked } from '@angular/core';

import { Tab } from './tab';

@Component({
	selector: 'plim-tab-group',
	templateUrl: './tab-group.html',
	styleUrl: './tab-group.scss',
	host: {
		class: 'plim-tab-group',
	},
})
export class TabGroup {
	public readonly selectedIndex = model(0);

	protected readonly tabs = contentChildren(Tab);

	constructor() {
		effect(() => {
			const selected = this.selectedIndex();
			const tabs = this.tabs();
			untracked(() => {
				tabs.forEach((tab, index) => {
					tab.setSelected(index === selected);
				});
			});
		});
	}

	protected isTabSelected(index: number): boolean {
		return this.selectedIndex() === index;
	}

	protected selectTab(index: number): void {
		const tab = this.tabs()[index];
		if (!tab || tab.disabled()) {
			return;
		}

		this.selectedIndex.set(index);
	}

	protected onTablistKeydown(event: KeyboardEvent): void {
		const nextIndex = this.nextIndexFromKey(event.key);
		if (nextIndex === null) {
			return;
		}

		event.preventDefault();
		this.selectedIndex.set(nextIndex);
		this.focusTab(nextIndex);
	}

	private nextIndexFromKey(key: string): number | null {
		const enabled = this.enabledIndices();
		if (enabled.length === 0) {
			return null;
		}

		switch (key) {
			case 'ArrowRight':
				return this.stepEnabled(1, enabled);
			case 'ArrowLeft':
				return this.stepEnabled(-1, enabled);
			case 'Home':
				return enabled[0];
			case 'End':
				return enabled[enabled.length - 1];
			default:
				return null;
		}
	}

	private enabledIndices(): number[] {
		return this.tabs().reduce<number[]>((indices, tab, index) => {
			if (!tab.disabled()) {
				indices.push(index);
			}

			return indices;
		}, []);
	}

	private stepEnabled(delta: number, enabled: number[]): number {
		const current = enabled.indexOf(this.selectedIndex());
		const from = current >= 0 ? current : delta > 0 ? -1 : 0;
		return enabled[(from + delta + enabled.length) % enabled.length];
	}

	private focusTab(index: number): void {
		const tab = this.tabs()[index];
		if (!tab) {
			return;
		}

		queueMicrotask(() => {
			document.getElementById(tab.tabId)?.focus();
		});
	}
}
