import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkbox } from './checkbox';

describe('Checkbox', () => {
	let fixture: ComponentFixture<Checkbox>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Checkbox],
		}).compileComponents();

		fixture = TestBed.createComponent(Checkbox);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
