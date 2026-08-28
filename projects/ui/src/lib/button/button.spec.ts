import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

@Component({
	template: `<button type="button" plimButton>Save</button>`,
	imports: [Button],
})
class PrimaryButtonHost {}

@Component({
	template: `<button type="button" plimButton variant="secondary">Cancel</button>`,
	imports: [Button],
})
class SecondaryButtonHost {}

@Component({
	template: `<button type="button" plimButton disabled>Save</button>`,
	imports: [Button],
})
class DisabledButtonHost {}

@Component({
	template: `<button type="button" plimButton variant="text">Link</button>`,
	imports: [Button],
})
class TextButtonHost {}

@Component({
	template: `<button type="button" plimButton loading>Saving</button>`,
	imports: [Button],
})
class LoadingButtonHost {}

describe('Button', () => {
	let fixture: ComponentFixture<PrimaryButtonHost>;
	let button: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [PrimaryButtonHost] }).compileComponents();
		fixture = TestBed.createComponent(PrimaryButtonHost);
		fixture.detectChanges();
		button = fixture.nativeElement.querySelector('button')!;
	});

	it('should create', () => {
		expect(button).toBeTruthy();
	});

	it('should apply plim-button class', () => {
		expect(button.classList.contains('plim-button')).toBe(true);
	});

	it('should project button label content', () => {
		expect(button.textContent?.trim()).toBe('Save');
	});

	it('should apply variant modifier class', () => {
		expect(button.classList.contains('plim-button--primary')).toBe(true);

		const secondaryFixture = TestBed.createComponent(SecondaryButtonHost);
		secondaryFixture.detectChanges();
		const secondaryButton = secondaryFixture.nativeElement.querySelector('button')!;
		expect(secondaryButton.classList.contains('plim-button--secondary')).toBe(true);

		const textFixture = TestBed.createComponent(TextButtonHost);
		textFixture.detectChanges();
		const textButton = textFixture.nativeElement.querySelector('button')!;
		expect(textButton.classList.contains('plim-button--text')).toBe(true);
	});

	it('should disable the native button', () => {
		const disabledFixture = TestBed.createComponent(DisabledButtonHost);
		disabledFixture.detectChanges();
		const disabledButton = disabledFixture.nativeElement.querySelector('button')!;
		expect(disabledButton.disabled).toBe(true);
	});

	it('should disable and mark busy when loading', () => {
		const loadingFixture = TestBed.createComponent(LoadingButtonHost);
		loadingFixture.detectChanges();
		const loadingButton = loadingFixture.nativeElement.querySelector('button')!;
		expect(loadingButton.disabled).toBe(true);
		expect(loadingButton.getAttribute('aria-busy')).toBe('true');
		expect(loadingButton.classList.contains('plim-button--loading')).toBe(true);
	});
});
