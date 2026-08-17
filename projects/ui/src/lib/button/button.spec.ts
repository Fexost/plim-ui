import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

describe('Button', () => {
	let fixture: ComponentFixture<Button>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Button],
		}).compileComponents();

		fixture = TestBed.createComponent(Button);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
