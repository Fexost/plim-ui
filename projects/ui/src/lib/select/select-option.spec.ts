import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SelectOption } from './select-option';

@Component({
	template: `
		<plim-select-option value="1" selected>Item 1</plim-select-option>
	`,
	imports: [SelectOption],
})
class SelectOptionHost {}

describe('SelectOption', () => {
	let fixture: ComponentFixture<SelectOptionHost>;
	let option: SelectOption;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SelectOptionHost] }).compileComponents();
		fixture = TestBed.createComponent(SelectOptionHost);
		fixture.detectChanges();
		option = fixture.debugElement.query(By.directive(SelectOption))!.componentInstance;
	});

	it('should expose option metadata', () => {
		expect(option.value()).toBe('1');
		expect(option.label()).toBe('Item 1');
		expect(option.selected()).toBe(true);
	});

	it('should stay hidden from the layout', () => {
		const host = fixture.nativeElement.querySelector('plim-select-option') as HTMLElement;
		expect(host.hasAttribute('hidden')).toBe(true);
	});
});
