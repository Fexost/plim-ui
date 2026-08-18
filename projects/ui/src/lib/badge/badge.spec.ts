import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge } from './badge';

describe('Badge', () => {
	let fixture: ComponentFixture<Badge>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Badge],
		}).compileComponents();

		fixture = TestBed.createComponent(Badge);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
