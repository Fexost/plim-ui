import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table } from '../table/table';
import { Sort } from './sort';
import { SortHeader } from './sort-header';

@Component({
	template: `
		<table plimTable plimSort>
			<thead>
				<tr>
					<th plimSortHeader="name">Name</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Lorem ipsum</td>
				</tr>
			</tbody>
		</table>
	`,
	imports: [Table, Sort, SortHeader],
})
class SortHost {}

describe('Sort', () => {
	let fixture: ComponentFixture<SortHost>;
	let header: HTMLTableCellElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SortHost] }).compileComponents();
		fixture = TestBed.createComponent(SortHost);
		fixture.detectChanges();
		header = fixture.nativeElement.querySelector('th')!;
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('table.plim-sort')).toBeTruthy();
		expect(header.classList.contains('plim-sort-header')).toBe(true);
	});

	it('should cycle aria-sort through ascending, descending, and none', () => {
		const button = header.querySelector('button') as HTMLButtonElement;

		expect(header.getAttribute('aria-sort')).toBe('none');

		button.click();
		fixture.detectChanges();
		expect(header.getAttribute('aria-sort')).toBe('ascending');

		button.click();
		fixture.detectChanges();
		expect(header.getAttribute('aria-sort')).toBe('descending');

		button.click();
		fixture.detectChanges();
		expect(header.getAttribute('aria-sort')).toBe('none');
	});
});
