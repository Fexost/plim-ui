import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radio } from './radio';

describe('Radio', () => {
	let fixture: ComponentFixture<Radio>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Radio],
		}).compileComponents();

		fixture = TestBed.createComponent(Radio);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
