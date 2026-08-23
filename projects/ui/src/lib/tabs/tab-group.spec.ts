import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab } from './tab';
import { TabGroup } from './tab-group';

@Component({
	template: `
		<plim-tab-group [(selectedIndex)]="selectedIndex">
			<plim-tab label="One">First panel</plim-tab>
			<plim-tab label="Two">Second panel</plim-tab>
			<plim-tab label="Three" disabled>Third panel</plim-tab>
		</plim-tab-group>
	`,
	imports: [Tab, TabGroup],
})
class TabGroupHost {
	public selectedIndex = 0;
}

describe('TabGroup', () => {
	let fixture: ComponentFixture<TabGroupHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TabGroupHost] }).compileComponents();
		fixture = TestBed.createComponent(TabGroupHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-tab-group')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
		expect(host.classList.contains('plim-tab-group')).toBe(true);
		expect(host.querySelector('[role="tablist"]')).toBeTruthy();
	});

	it('should show the selected panel and move with arrow keys', () => {
		const tabs = host.querySelectorAll<HTMLButtonElement>('[role="tab"]');
		const panels = host.querySelectorAll<HTMLElement>('plim-tab');

		expect(tabs[0].getAttribute('aria-selected')).toBe('true');
		expect(panels[0].hidden).toBe(false);
		expect(panels[1].hidden).toBe(true);
		expect(panels[0].textContent?.trim()).toBe('First panel');

		tabs[1].click();
		fixture.detectChanges();

		expect(fixture.componentInstance.selectedIndex).toBe(1);
		expect(tabs[1].getAttribute('aria-selected')).toBe('true');
		expect(panels[0].hidden).toBe(true);
		expect(panels[1].hidden).toBe(false);

		const tablist = host.querySelector('[role="tablist"]')!;
		tablist.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
		fixture.detectChanges();

		expect(fixture.componentInstance.selectedIndex).toBe(0);
		expect(tabs[0].getAttribute('aria-selected')).toBe('true');
	});
});
