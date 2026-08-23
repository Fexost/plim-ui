import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEvent, Paginator } from './paginator';

@Component({
	template: `
		<plim-paginator
			[length]="length"
			[pageSize]="pageSize"
			[pageIndex]="pageIndex"
			[pageSizeOptions]="pageSizeOptions"
			ariaLabel="Results"
			(page)="onPage($event)"
		/>
	`,
	imports: [Paginator],
})
class PaginatorHost {
	protected length = 100;
	protected pageSize = 10;
	protected pageIndex = 0;
	protected pageSizeOptions = [5, 10, 25];
	public lastEvent: PageEvent | null = null;

	protected onPage(event: PageEvent): void {
		this.lastEvent = event;
		this.pageIndex = event.pageIndex;
		this.pageSize = event.pageSize;
	}
}

describe('Paginator', () => {
	let fixture: ComponentFixture<PaginatorHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [PaginatorHost] }).compileComponents();
		fixture = TestBed.createComponent(PaginatorHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-paginator')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
		expect(host.getAttribute('role')).toBe('navigation');
		expect(host.getAttribute('aria-label')).toBe('Results');
	});

	it('should show the current range and emit the next page', () => {
		expect(host.querySelector('.plim-paginator__range')?.textContent?.trim()).toBe(
			'1–10 of 100',
		);

		const previous = host.querySelector<HTMLButtonElement>(
			'button[aria-label="Previous page"]',
		)!;
		const next = host.querySelector<HTMLButtonElement>('button[aria-label="Next page"]')!;

		expect(previous.disabled).toBe(true);
		expect(next.disabled).toBe(false);

		next.click();
		fixture.detectChanges();

		expect(host.querySelector('.plim-paginator__range')?.textContent?.trim()).toBe(
			'11–20 of 100',
		);
		expect(previous.disabled).toBe(false);
		expect(fixture.componentInstance.lastEvent).toEqual({
			pageIndex: 1,
			pageSize: 10,
			length: 100,
		});
	});
});
