import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Snackbar } from './snackbar';

@Component({
	template: `
		<plim-snackbar [open]="open()" [duration]="duration" (closed)="onClosed()">
			Changes saved
		</plim-snackbar>
	`,
	imports: [Snackbar],
})
class SnackbarHost {
	public readonly open = signal(false);
	public duration = 0;
	public closedCount = 0;

	public onClosed(): void {
		this.closedCount += 1;
		this.open.set(false);
	}
}

describe('Snackbar', () => {
	let fixture: ComponentFixture<SnackbarHost>;
	let host: SnackbarHost;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SnackbarHost] }).compileComponents();
		fixture = TestBed.createComponent(SnackbarHost);
		fixture.detectChanges();
		host = fixture.componentInstance;
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-snackbar')).toBeTruthy();
		expect(document.querySelector('.plim-snackbar')).toBeNull();
	});

	it('should emit closed when dismiss is clicked', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		const snackbar = document.querySelector('.plim-snackbar');
		expect(snackbar?.textContent).toContain('Changes saved');

		const dismiss = document.querySelector('.plim-snackbar__dismiss') as HTMLButtonElement | null;
		dismiss?.click();
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.closedCount).toBe(1);
		expect(document.querySelector('.plim-snackbar')).toBeNull();
	});
});
