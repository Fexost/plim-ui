import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormField } from './form-field';

describe('FormField', () => {
	let fixture: ComponentFixture<FormField>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FormField],
		}).compileComponents();

		fixture = TestBed.createComponent(FormField);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
