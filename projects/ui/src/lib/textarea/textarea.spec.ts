import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textarea } from './textarea';

@Component({
	template: `<textarea plimTextarea></textarea>`,
	imports: [Textarea],
})
class TextareaHost {}

@Component({
	template: `<textarea plimTextarea invalid></textarea>`,
	imports: [Textarea],
})
class InvalidTextareaHost {}

describe('Textarea', () => {
	let fixture: ComponentFixture<TextareaHost>;
	let textarea: HTMLTextAreaElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TextareaHost] }).compileComponents();
		fixture = TestBed.createComponent(TextareaHost);
		fixture.detectChanges();
		textarea = fixture.nativeElement.querySelector('textarea');
	});

	it('should create', () => {
		expect(textarea).toBeTruthy();
	});

	it('should apply plim-textarea class', () => {
		expect(textarea.classList.contains('plim-textarea')).toBe(true);
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidTextareaHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidTextarea = invalidFixture.nativeElement.querySelector('textarea');
		expect(invalidTextarea.classList.contains('plim-textarea--invalid')).toBe(true);
		expect(invalidTextarea.getAttribute('aria-invalid')).toBe('true');
	});
});
