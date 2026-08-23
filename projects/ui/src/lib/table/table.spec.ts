import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table } from './table';

@Component({
	template: `
		<table plimTable>
			<thead>
				<tr>
					<th>Name</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Ada</td>
				</tr>
			</tbody>
		</table>
	`,
	imports: [Table],
})
class TableHost {}

describe('Table', () => {
	let fixture: ComponentFixture<TableHost>;
	let table: HTMLTableElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TableHost] }).compileComponents();
		fixture = TestBed.createComponent(TableHost);
		fixture.detectChanges();
		table = fixture.nativeElement.querySelector('table')!;
	});

	it('should create', () => {
		expect(table).toBeTruthy();
	});

	it('should apply the plim-table class to the native table', () => {
		expect(table.classList.contains('plim-table')).toBe(true);
		expect(table.querySelector('td')?.textContent?.trim()).toBe('Ada');
	});
});
