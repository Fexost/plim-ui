import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatComposer } from './chat-composer';

@Component({
	template: `<plim-chat-composer (submitted)="lastSubmitted = $event" />`,
	imports: [ChatComposer],
})
class ChatComposerHost {
	public lastSubmitted = '';
}

describe('ChatComposer', () => {
	let fixture: ComponentFixture<ChatComposerHost>;
	let host: ChatComposerHost;
	let input: HTMLInputElement;
	let sendButton: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ChatComposerHost] }).compileComponents();
		fixture = TestBed.createComponent(ChatComposerHost);
		host = fixture.componentInstance;
		fixture.detectChanges();
		input = fixture.nativeElement.querySelector('input')!;
		sendButton = fixture.nativeElement.querySelector('button.plim-button')!;
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-chat-composer')).toBeTruthy();
	});

	it('should disable send until there is a draft message', () => {
		expect(sendButton.disabled).toBe(true);

		input.value = 'How do I use plimButton?';
		input.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		expect(sendButton.disabled).toBe(false);
	});

	it('should submit on Enter and clear the field', () => {
		input.value = 'How do I use plimButton?';
		input.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
		fixture.detectChanges();

		expect(host.lastSubmitted).toBe('How do I use plimButton?');
		expect(input.value).toBe('');
	});

	it('should submit when send is clicked', () => {
		input.value = 'How do I theme plim-ui?';
		input.dispatchEvent(new Event('input'));
		fixture.detectChanges();
		sendButton.click();
		fixture.detectChanges();

		expect(host.lastSubmitted).toBe('How do I theme plim-ui?');
		expect(input.value).toBe('');
	});

	it('should ignore blank submissions', () => {
		input.value = '   ';
		input.dispatchEvent(new Event('input'));
		input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

		expect(host.lastSubmitted).toBe('');
	});
});
