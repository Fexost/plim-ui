import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chip } from './chip';
import { ChipSet } from './chip-set';

@Component({
	template: `
		<plim-chip-set>
			<plim-chip removable (removed)="onRemoved()">Angular</plim-chip>
			<plim-chip>Signals</plim-chip>
		</plim-chip-set>
	`,
	imports: [Chip, ChipSet],
})
class ChipHost {
	public removed = false;

	protected onRemoved(): void {
		this.removed = true;
	}
}

describe('Chip', () => {
	let fixture: ComponentFixture<ChipHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ChipHost] }).compileComponents();
		fixture = TestBed.createComponent(ChipHost);
		fixture.detectChanges();
		host = fixture.nativeElement;
	});

	it('should create', () => {
		expect(host.querySelector('plim-chip-set')).toBeTruthy();
		expect(host.querySelector('plim-chip')).toBeTruthy();
	});

	it('should emit removed when the dismiss control is clicked', () => {
		const remove = host.querySelector('.plim-chip__remove') as HTMLButtonElement;
		expect(remove.getAttribute('aria-label')).toBe('Remove');

		remove.click();
		fixture.detectChanges();

		expect(fixture.componentInstance.removed).toBe(true);
	});
});
