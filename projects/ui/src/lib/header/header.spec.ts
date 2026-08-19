import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

@Component({
	template: `
		<plim-header sticky>
			<div plimHeaderStart>Start</div>
			<div plimHeaderCenter>Center</div>
			<div plimHeaderEnd>End</div>
		</plim-header>
	`,
	imports: [Header],
})
class HeaderHost {}

describe('Header', () => {
	let fixture: ComponentFixture<HeaderHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [HeaderHost] }).compileComponents();
		fixture = TestBed.createComponent(HeaderHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-header')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should apply plim-header class and sticky modifier', () => {
		expect(host.classList.contains('plim-header')).toBe(true);
		expect(host.classList.contains('plim-header--sticky')).toBe(true);
	});

	it('should render a semantic header landmark', () => {
		expect(host.querySelector('header.plim-header__bar')).toBeTruthy();
	});

	it('should project start, center, and end slots', () => {
		expect(host.querySelector('.plim-header__start')?.textContent?.trim()).toBe('Start');
		expect(host.querySelector('.plim-header__center')?.textContent?.trim()).toBe('Center');
		expect(host.querySelector('.plim-header__end')?.textContent?.trim()).toBe('End');
	});
});
