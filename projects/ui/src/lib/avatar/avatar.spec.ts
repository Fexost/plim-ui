import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avatar } from './avatar';

describe('Avatar', () => {
	let fixture: ComponentFixture<Avatar>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Avatar],
		}).compileComponents();

		fixture = TestBed.createComponent(Avatar);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});
});
