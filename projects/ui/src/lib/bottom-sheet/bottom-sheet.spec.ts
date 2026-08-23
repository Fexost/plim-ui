import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheet } from './bottom-sheet';

@Component({
	template: `
		<plim-bottom-sheet [open]="open()" ariaLabel="Share options" (closed)="onClosed()">
			<p>Share this page</p>
			<button type="button">Copy link</button>
		</plim-bottom-sheet>
	`,
	imports: [BottomSheet],
})
class BottomSheetHost {
	public readonly open = signal(false);
	public closedCount = 0;

	public onClosed(): void {
		this.closedCount += 1;
		this.open.set(false);
	}
}

describe('BottomSheet', () => {
	let fixture: ComponentFixture<BottomSheetHost>;
	let host: BottomSheetHost;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [BottomSheetHost] }).compileComponents();
		fixture = TestBed.createComponent(BottomSheetHost);
		fixture.detectChanges();
		host = fixture.componentInstance;
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-bottom-sheet')).toBeTruthy();
		expect(document.querySelector('.plim-bottom-sheet')).toBeNull();
	});

	it('should emit closed when the backdrop is clicked', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		expect(document.querySelector('.plim-bottom-sheet')).toBeTruthy();

		const backdrop = document.querySelector('.plim-bottom-sheet__backdrop') as HTMLElement | null;
		backdrop?.click();
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.closedCount).toBe(1);
		expect(document.querySelector('.plim-bottom-sheet')).toBeNull();
	});
});
