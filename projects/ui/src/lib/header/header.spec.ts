import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
	let fixture: ComponentFixture<Header>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [Header],
		}).compileComponents();

		fixture = TestBed.createComponent(Header);
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(fixture.componentInstance).toBeTruthy();
	});

	it('should apply sticky modifier on the host', () => {
		fixture.componentRef.setInput('sticky', true);
		fixture.detectChanges();
		expect(fixture.nativeElement.classList.contains('plim-header--sticky')).toBe(true);
	});
});
