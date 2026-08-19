import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch } from './switch';

describe('Switch', () => {
	let fixture: ComponentFixture<Switch>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Switch],
		}).compileComponents();

		fixture = TestBed.createComponent(Switch);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
