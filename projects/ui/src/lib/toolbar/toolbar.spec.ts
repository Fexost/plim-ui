import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toolbar } from './toolbar';

@Component({
	template: `
		<plim-toolbar sticky>
			<div plimToolbarStart>Start</div>
			<div plimToolbarEnd>End</div>
		</plim-toolbar>
	`,
	imports: [Toolbar],
})
class ToolbarHost {}

describe('Toolbar', () => {
	let fixture: ComponentFixture<ToolbarHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ToolbarHost] }).compileComponents();
		fixture = TestBed.createComponent(ToolbarHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-toolbar')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should apply the sticky modifier and project start and end slots', () => {
		expect(host.classList.contains('plim-toolbar')).toBe(true);
		expect(host.classList.contains('plim-toolbar--sticky')).toBe(true);
		expect(host.querySelector('.plim-toolbar__start')?.textContent?.trim()).toBe('Start');
		expect(host.querySelector('.plim-toolbar__end')?.textContent?.trim()).toBe('End');
	});
});
