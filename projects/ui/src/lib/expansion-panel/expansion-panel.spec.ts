import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanel } from './expansion-panel';

@Component({
	template: `
		<plim-expansion-panel>
			<span plimExpansionHeader>Details</span>
			Body copy
		</plim-expansion-panel>
	`,
	imports: [ExpansionPanel],
})
class ExpansionPanelHost {}

describe('ExpansionPanel', () => {
	let fixture: ComponentFixture<ExpansionPanelHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ExpansionPanelHost] }).compileComponents();
		fixture = TestBed.createComponent(ExpansionPanelHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-expansion-panel')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should toggle the body and aria-expanded on header click', () => {
		const header = host.querySelector('.plim-expansion-panel__header') as HTMLButtonElement;
		const body = host.querySelector('.plim-expansion-panel__body') as HTMLElement;

		expect(header.getAttribute('aria-expanded')).toBe('false');
		expect(body.hidden).toBe(true);

		header.click();
		fixture.detectChanges();

		expect(header.getAttribute('aria-expanded')).toBe('true');
		expect(body.hidden).toBe(false);
	});
});
