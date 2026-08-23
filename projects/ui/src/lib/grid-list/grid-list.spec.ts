import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridList } from './grid-list';
import { GridTile } from './grid-tile';

@Component({
	template: `
		<plim-grid-list [cols]="3">
			<plim-grid-tile>One</plim-grid-tile>
			<plim-grid-tile>Two</plim-grid-tile>
		</plim-grid-list>
	`,
	imports: [GridList, GridTile],
})
class GridListHost {}

describe('GridList', () => {
	let fixture: ComponentFixture<GridListHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [GridListHost] }).compileComponents();
		fixture = TestBed.createComponent(GridListHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-grid-list')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
		expect(host.querySelector('plim-grid-tile')).toBeTruthy();
	});

	it('should apply a column template from cols', () => {
		expect(host.style.gridTemplateColumns).toBe('repeat(3, minmax(0, 1fr))');
		expect(host.querySelector('plim-grid-tile')?.textContent?.trim()).toBe('One');
	});
});
