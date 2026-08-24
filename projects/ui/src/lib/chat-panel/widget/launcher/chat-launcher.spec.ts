import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLauncher } from './chat-launcher';

@Component({
	template: `<plim-chat-launcher (activated)="activated = true" />`,
	imports: [ChatLauncher],
})
class ChatLauncherHost {
	public activated = false;
}

describe('ChatLauncher', () => {
	let fixture: ComponentFixture<ChatLauncherHost>;
	let host: ChatLauncherHost;
	let button: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ChatLauncherHost] }).compileComponents();
		fixture = TestBed.createComponent(ChatLauncherHost);
		host = fixture.componentInstance;
		fixture.detectChanges();
		button = fixture.nativeElement.querySelector('button')!;
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-chat-launcher')).toBeTruthy();
	});

	it('should emit activated when clicked', () => {
		button.click();
		expect(host.activated).toBe(true);
	});
});
