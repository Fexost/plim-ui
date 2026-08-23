import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from '../button/button';
import { Tooltip } from './tooltip';

@Component({
	template: `
		<button type="button" plimButton plimTooltip="Copied to clipboard">Copy</button>
	`,
	imports: [Button, Tooltip],
})
class TooltipHost {}

describe('Tooltip', () => {
	let fixture: ComponentFixture<TooltipHost>;
	let trigger: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TooltipHost] }).compileComponents();
		fixture = TestBed.createComponent(TooltipHost);
		fixture.detectChanges();
		trigger = fixture.nativeElement.querySelector('button')!;
	});

	afterEach(() => {
		fixture.destroy();
		document.querySelectorAll('.plim-tooltip').forEach((panel) => panel.remove());
	});

	it('should create alongside plimButton on the same trigger', () => {
		expect(trigger).toBeTruthy();
		expect(trigger.classList.contains('plim-button')).toBe(true);
		expect(trigger.textContent?.trim()).toBe('Copy');
		expect(document.querySelector('.plim-tooltip')).toBeNull();
	});

	it('should show a tooltip on pointerenter and link it with aria-describedby', () => {
		trigger.dispatchEvent(new PointerEvent('pointerenter', { bubbles: true }));
		fixture.detectChanges();

		const tooltip = document.querySelector('.plim-tooltip');
		expect(tooltip?.getAttribute('role')).toBe('tooltip');
		expect(tooltip?.textContent?.trim()).toBe('Copied to clipboard');
		expect(trigger.getAttribute('aria-describedby')).toBe(tooltip?.id ?? null);
	});
});
