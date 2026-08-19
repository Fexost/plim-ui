import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select } from './select';

describe('Select', () => {
	let fixture: ComponentFixture<Select>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Select],
		}).compileComponents();

		fixture = TestBed.createComponent(Select);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
