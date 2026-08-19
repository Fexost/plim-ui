import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormField } from './form-field';

@Component({
	template: `
		<plim-form-field>
			<label plimFormFieldLabel for="email">Email</label>
			<input id="email" type="email" />
			<span plimFormFieldHint>We will never share your email.</span>
			<span plimFormFieldError>Enter a valid email.</span>
		</plim-form-field>
	`,
	imports: [FormField],
})
class FormFieldHost {}

@Component({
	template: `
		<plim-form-field invalid>
			<label plimFormFieldLabel for="email-error">Email</label>
			<input id="email-error" type="email" />
			<span plimFormFieldError>Enter a valid email.</span>
		</plim-form-field>
	`,
	imports: [FormField],
})
class InvalidFormFieldHost {}

describe('FormField', () => {
	describe('default', () => {
		let fixture: ComponentFixture<FormFieldHost>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [FormFieldHost] }).compileComponents();
			fixture = TestBed.createComponent(FormFieldHost);
			fixture.detectChanges();
			host = fixture.nativeElement.querySelector('plim-form-field')!;
		});

		it('should create', () => {
			expect(host).toBeTruthy();
		});

		it('should apply plim-form-field class', () => {
			expect(host.classList.contains('plim-form-field')).toBe(true);
		});

		it('should project label, control, hint, and error slots', () => {
			expect(host.querySelector('.plim-form-field__label label')?.textContent?.trim()).toBe(
				'Email',
			);
			expect(host.querySelector('.plim-form-field__control input')).toBeTruthy();
			expect(host.querySelector('.plim-form-field__hint')?.textContent?.trim()).toBe(
				'We will never share your email.',
			);
			expect(host.querySelector('.plim-form-field__error')?.textContent?.trim()).toBe(
				'Enter a valid email.',
			);
		});
	});

	describe('invalid', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [InvalidFormFieldHost] }).compileComponents();
		});

		it('should apply invalid modifier class', () => {
			const fixture = TestBed.createComponent(InvalidFormFieldHost);
			fixture.detectChanges();
			const host = fixture.nativeElement.querySelector('plim-form-field')!;
			expect(host.classList.contains('plim-form-field--invalid')).toBe(true);
		});
	});
});
