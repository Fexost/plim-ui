import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPrompt } from './chat-prompt';

@Component({
	template: `<plim-chat-prompt (selected)="onSelect()">Ask about tokens</plim-chat-prompt>`,
	imports: [ChatPrompt],
})
class ChatPromptHost {
	public selected = false;

	protected onSelect(): void {
		this.selected = true;
	}
}

describe('ChatPrompt', () => {
	let fixture: ComponentFixture<ChatPromptHost>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ChatPromptHost] }).compileComponents();
		fixture = TestBed.createComponent(ChatPromptHost);
		fixture.detectChanges();
	});

	it('should emit selected when clicked', () => {
		const button = fixture.nativeElement.querySelector('.plim-chat-prompt__button');
		button.click();
		expect(fixture.componentInstance.selected).toBe(true);
	});
});
