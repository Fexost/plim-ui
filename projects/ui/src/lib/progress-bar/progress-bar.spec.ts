import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBar } from './progress-bar';

describe('ProgressBar', () => {
	let fixture: ComponentFixture<ProgressBar>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ProgressBar] }).compileComponents();
		fixture = TestBed.createComponent(ProgressBar);
		fixture.componentRef.setInput('value', 42);
		fixture.detectChanges();
		host = fixture.nativeElement;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should expose progressbar semantics', () => {
		expect(host.getAttribute('role')).toBe('progressbar');
		expect(host.getAttribute('aria-valuenow')).toBe('42');
	});

	it('should clamp value between 0 and 100', () => {
		fixture.componentRef.setInput('value', 150);
		fixture.detectChanges();
		expect(host.getAttribute('aria-valuenow')).toBe('100');
	});

	it('should omit aria-valuenow when indeterminate', () => {
		fixture.componentRef.setInput('mode', 'indeterminate');
		fixture.detectChanges();
		expect(host.getAttribute('aria-valuenow')).toBeNull();
		expect(host.classList.contains('plim-progress-bar--indeterminate')).toBe(true);
	});
});
