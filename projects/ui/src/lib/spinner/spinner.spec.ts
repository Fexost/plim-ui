import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spinner } from './spinner';

describe('Spinner', () => {
	let fixture: ComponentFixture<Spinner>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Spinner],
		}).compileComponents();

		fixture = TestBed.createComponent(Spinner);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
