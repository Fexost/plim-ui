import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dialog } from './dialog';

@Component({
	template: `
		<plim-dialog [open]="open()" ariaLabel="Confirm delete" (closed)="onClosed()">
			<h2 plimDialogTitle>Delete item</h2>
			<p>This cannot be undone.</p>
			<div plimDialogActions>
				<button type="button">Cancel</button>
			</div>
		</plim-dialog>
	`,
	imports: [Dialog],
})
class DialogHost {
	public readonly open = signal(false);
	public closedCount = 0;

	public onClosed(): void {
		this.closedCount += 1;
		this.open.set(false);
	}
}

describe('Dialog', () => {
	let fixture: ComponentFixture<DialogHost>;
	let host: DialogHost;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [DialogHost] }).compileComponents();
		fixture = TestBed.createComponent(DialogHost);
		fixture.detectChanges();
		host = fixture.componentInstance;
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-dialog')).toBeTruthy();
		expect(document.querySelector('.plim-dialog')).toBeNull();
	});

	it('should emit closed on Escape when open', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		const panel = document.querySelector('.plim-dialog');
		expect(panel).toBeTruthy();

		panel?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.closedCount).toBe(1);
		expect(document.querySelector('.plim-dialog')).toBeNull();
	});
});
