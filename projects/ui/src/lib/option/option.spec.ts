import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Option } from './option';

@Component({
	template: `<plim-option value="1" selected>Item 1</plim-option>`,
	imports: [Option],
})
class OptionHost {}

describe('Option', () => {
	let fixture: ComponentFixture<OptionHost>;
	let option: Option;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [OptionHost] }).compileComponents();
		fixture = TestBed.createComponent(OptionHost);
		fixture.detectChanges();
		option = fixture.debugElement.query(By.directive(Option))!.componentInstance;
	});

	it('should create', () => {
		expect(option).toBeTruthy();
	});

	it('should read projected label text', () => {
		expect(option.label()).toBe('Item 1');
	});

	it('should hide the host element', () => {
		const host = fixture.nativeElement.querySelector('plim-option') as HTMLElement;
		expect(host.hidden).toBe(true);
	});
});
