import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggle } from './button-toggle';
import { ButtonToggleGroup } from './button-toggle-group';

@Component({
	template: `
		<plim-button-toggle-group [(value)]="view">
			<button type="button" plimButtonToggle="list">List</button>
			<button type="button" plimButtonToggle="grid">Grid</button>
		</plim-button-toggle-group>
	`,
	imports: [ButtonToggleGroup, ButtonToggle],
})
class SingleButtonToggleHost {
	protected view = 'list';
}

@Component({
	template: `
		<plim-button-toggle-group multiple [(values)]="ingredients">
			<button type="button" plimButtonToggle="flour">Flour</button>
			<button type="button" plimButtonToggle="eggs">Eggs</button>
			<button type="button" plimButtonToggle="sugar">Sugar</button>
		</plim-button-toggle-group>
	`,
	imports: [ButtonToggleGroup, ButtonToggle],
})
class MultipleButtonToggleHost {
	protected ingredients = ['eggs'];
}

describe('ButtonToggle', () => {
	describe('single selection', () => {
		let fixture: ComponentFixture<SingleButtonToggleHost>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [SingleButtonToggleHost] }).compileComponents();
			fixture = TestBed.createComponent(SingleButtonToggleHost);
			fixture.detectChanges();
			host = fixture.nativeElement;
		});

		it('should create', () => {
			expect(host.querySelector('plim-button-toggle-group')).toBeTruthy();
		});

		it('should mark the active toggle with aria-pressed', () => {
			const buttons = host.querySelectorAll('button.plim-button-toggle');
			const list = buttons[0] as HTMLButtonElement;
			const grid = buttons[1] as HTMLButtonElement;

			expect(list.getAttribute('aria-pressed')).toBe('true');
			expect(grid.getAttribute('aria-pressed')).toBe('false');

			grid.click();
			fixture.detectChanges();

			expect(list.getAttribute('aria-pressed')).toBe('false');
			expect(grid.getAttribute('aria-pressed')).toBe('true');
		});
	});

	describe('multiple selection', () => {
		let fixture: ComponentFixture<MultipleButtonToggleHost>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({
				imports: [MultipleButtonToggleHost],
			}).compileComponents();
			fixture = TestBed.createComponent(MultipleButtonToggleHost);
			fixture.detectChanges();
			host = fixture.nativeElement;
		});

		it('should allow selecting and deselecting multiple toggles', () => {
			const buttons = host.querySelectorAll('button.plim-button-toggle');
			const flour = buttons[0] as HTMLButtonElement;
			const eggs = buttons[1] as HTMLButtonElement;
			const sugar = buttons[2] as HTMLButtonElement;

			expect(eggs.getAttribute('aria-pressed')).toBe('true');
			expect(flour.getAttribute('aria-pressed')).toBe('false');

			flour.click();
			sugar.click();
			fixture.detectChanges();

			expect(flour.getAttribute('aria-pressed')).toBe('true');
			expect(sugar.getAttribute('aria-pressed')).toBe('true');

			eggs.click();
			fixture.detectChanges();

			expect(eggs.getAttribute('aria-pressed')).toBe('false');
		});
	});
});
