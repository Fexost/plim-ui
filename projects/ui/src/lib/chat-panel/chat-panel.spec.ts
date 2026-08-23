import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPanel } from './chat-panel';

@Component({
	template: `
		<plim-chat-panel aria-label="Assistant">
			<div plimChatPanelHeader>Header</div>
			<div plimChatPanelMessages>Messages</div>
			<div plimChatPanelComposer>Composer</div>
			<div plimChatPanelFooter>Footer</div>
		</plim-chat-panel>
	`,
	imports: [ChatPanel],
})
class ChatPanelHost {}

describe('ChatPanel', () => {
	let fixture: ComponentFixture<ChatPanelHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ChatPanelHost] }).compileComponents();
		fixture = TestBed.createComponent(ChatPanelHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-chat-panel')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should apply plim-chat-panel class', () => {
		expect(host.classList.contains('plim-chat-panel')).toBe(true);
	});

	it('should forward aria-label to the surface', () => {
		const surface = host.querySelector('.plim-chat-panel__surface');
		expect(surface?.getAttribute('aria-label')).toBe('Assistant');
	});

	it('should project header, messages, composer, and footer content', () => {
		expect(host.querySelector('.plim-chat-panel__header')?.textContent?.trim()).toBe('Header');
		expect(host.querySelector('.plim-chat-panel__messages')?.textContent?.trim()).toBe('Messages');
		expect(host.querySelector('.plim-chat-panel__composer')?.textContent?.trim()).toBe('Composer');
		expect(host.querySelector('.plim-chat-panel__footer')?.textContent?.trim()).toBe('Footer');
	});

	it('should expose a polite live region for messages', () => {
		const messages = host.querySelector('.plim-chat-panel__messages');
		expect(messages?.getAttribute('role')).toBe('log');
		expect(messages?.getAttribute('aria-live')).toBe('polite');
		expect(messages?.getAttribute('aria-label')).toBe('Messages');
	});
});
