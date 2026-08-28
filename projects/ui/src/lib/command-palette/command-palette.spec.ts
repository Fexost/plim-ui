import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandPalette, CommandPaletteItem } from './command-palette';

const ITEMS: CommandPaletteItem[] = [
	{ id: 'overview', label: 'Overview', description: 'Get started' },
	{ id: 'button', label: 'Button', description: 'Basic' },
];

@Component({
	template: `
		<plim-command-palette
			[open]="open()"
			[items]="items"
			[query]="query()"
			(queryChange)="onQueryChange($event)"
			(selected)="onSelected($event)"
			(closed)="onClosed()"
		/>
	`,
	imports: [CommandPalette],
})
class CommandPaletteHost {
	public readonly open = signal(false);
	public readonly query = signal('');
	public readonly items = ITEMS;
	public closedCount = 0;
	public selectedItem: CommandPaletteItem | null = null;

	public onQueryChange(value: string): void {
		this.query.set(value);
	}

	public onSelected(item: CommandPaletteItem): void {
		this.selectedItem = item;
	}

	public onClosed(): void {
		this.closedCount += 1;
		this.open.set(false);
	}
}

describe('CommandPalette', () => {
	let fixture: ComponentFixture<CommandPaletteHost>;
	let host: CommandPaletteHost;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [CommandPaletteHost] }).compileComponents();
		fixture = TestBed.createComponent(CommandPaletteHost);
		fixture.detectChanges();
		host = fixture.componentInstance;
	});

	afterEach(() => {
		fixture.destroy();
		document.body.style.overflow = '';
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-command-palette')).toBeTruthy();
		expect(document.querySelector('.plim-command-palette')).toBeNull();
	});

	it('should emit closed on Escape when open', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		const panel = document.querySelector('.plim-command-palette');
		expect(panel).toBeTruthy();

		panel?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.closedCount).toBe(1);
	});

	it('should emit selected on Enter when open', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		const panel = document.querySelector('.plim-command-palette');
		panel?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.selectedItem).toEqual(ITEMS[0]);
	});
});
