import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List } from './list';
import { ListItem } from './list-item';

@Component({
	template: `
		<plim-list>
			<plim-list-item>Ada</plim-list-item>
			<plim-list-item disabled>Grace</plim-list-item>
		</plim-list>
	`,
	imports: [List, ListItem],
})
class ListHost {}

describe('List', () => {
	let fixture: ComponentFixture<ListHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ListHost] }).compileComponents();
		fixture = TestBed.createComponent(ListHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-list')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
		expect(host.querySelector('plim-list-item')).toBeTruthy();
	});

	it('should expose list semantics and disable items', () => {
		expect(host.getAttribute('role')).toBe('list');

		const items = host.querySelectorAll('plim-list-item');
		expect(items[0].getAttribute('role')).toBe('listitem');
		expect(items[1].getAttribute('aria-disabled')).toBe('true');
		expect(items[1].classList.contains('plim-list-item--disabled')).toBe(true);
	});
});
