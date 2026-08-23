import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu } from './menu';
import { MenuItem } from './menu-item';
import { MenuTrigger } from './menu-trigger';

@Component({
	template: `
		<button type="button" [plimMenuTrigger]="menu">Actions</button>
		<plim-menu #menu>
			<button type="button" plimMenuItem>Edit</button>
			<button type="button" plimMenuItem disabled>Archive</button>
		</plim-menu>
	`,
	imports: [Menu, MenuItem, MenuTrigger],
})
class MenuHost {}

describe('Menu', () => {
	let fixture: ComponentFixture<MenuHost>;
	let trigger: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [MenuHost] }).compileComponents();
		fixture = TestBed.createComponent(MenuHost);
		fixture.detectChanges();
		trigger = fixture.nativeElement.querySelector('button')!;
	});

	afterEach(() => {
		document.querySelectorAll('.plim-menu__panel').forEach((panel) => panel.remove());
	});

	it('should create', () => {
		expect(trigger).toBeTruthy();
		expect(fixture.nativeElement.querySelector('plim-menu')).toBeTruthy();
	});

	it('should open on trigger click and close after an item is chosen', () => {
		expect(trigger.getAttribute('aria-expanded')).toBe('false');

		trigger.click();
		fixture.detectChanges();

		const panel = document.querySelector('.plim-menu__panel');
		expect(panel).toBeTruthy();
		expect(trigger.getAttribute('aria-expanded')).toBe('true');

		const edit = document.querySelector<HTMLButtonElement>('.plim-menu-item:not(:disabled)');
		expect(edit?.textContent?.trim()).toBe('Edit');
		edit?.click();
		fixture.detectChanges();

		expect(document.querySelector('.plim-menu__panel')).toBeNull();
		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		expect(document.activeElement).toBe(trigger);
	});
});
