import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Separator } from './separator';

describe('Separator', () => {
	let fixture: ComponentFixture<Separator>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [Separator] }).compileComponents();
		fixture = TestBed.createComponent(Separator);
		fixture.detectChanges();
		host = fixture.nativeElement;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should apply plim-separator class and default horizontal modifier', () => {
		expect(host.classList.contains('plim-separator')).toBe(true);
		expect(host.classList.contains('plim-separator--horizontal')).toBe(true);
	});

	it('should apply vertical orientation modifier', () => {
		fixture.componentRef.setInput('orientation', 'vertical');
		fixture.detectChanges();
		expect(host.classList.contains('plim-separator--vertical')).toBe(true);
	});

	it('should render a separator landmark with orientation', () => {
		const separator = host.querySelector('.plim-separator__line');
		expect(separator?.getAttribute('role')).toBe('separator');
		expect(separator?.getAttribute('aria-orientation')).toBe('horizontal');

		fixture.componentRef.setInput('orientation', 'vertical');
		fixture.detectChanges();
		expect(separator?.getAttribute('aria-orientation')).toBe('vertical');
	});
});
