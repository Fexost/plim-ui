import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separator } from './separator';

describe('Separator', () => {
	let fixture: ComponentFixture<Separator>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Separator],
		}).compileComponents();

		fixture = TestBed.createComponent(Separator);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
