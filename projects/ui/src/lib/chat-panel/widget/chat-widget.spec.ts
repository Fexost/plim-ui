import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPanel } from '../panel/chat-panel';
import { ChatWidget } from './chat-widget';

@Component({
	template: `
		<plim-chat-widget [open]="open()" ariaLabel="Assistant" (closed)="onClosed()">
			<plim-chat-panel aria-label="Assistant">Messages</plim-chat-panel>
		</plim-chat-widget>
	`,
	imports: [ChatWidget, ChatPanel],
})
class ChatWidgetHost {
	public readonly open = signal(false);
	public closedCount = 0;

	public onClosed(): void {
		this.closedCount += 1;
		this.open.set(false);
	}
}

describe('ChatWidget', () => {
	let fixture: ComponentFixture<ChatWidgetHost>;
	let host: ChatWidgetHost;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [ChatWidgetHost] }).compileComponents();
		fixture = TestBed.createComponent(ChatWidgetHost);
		fixture.detectChanges();
		host = fixture.componentInstance;
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-chat-widget')).toBeTruthy();
		expect(document.querySelector('.plim-chat-widget')).toBeNull();
	});

	it('should render the panel in an overlay when open', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		expect(document.querySelector('.plim-chat-widget')).toBeTruthy();
		expect(document.querySelector('plim-chat-panel')).toBeTruthy();
	});

	it('should emit closed on Escape', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		const panel = document.querySelector('.plim-chat-widget') as HTMLElement | null;
		panel?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.closedCount).toBe(1);
	});

	it('should close when the launcher is clicked while open', async () => {
		host.open.set(true);
		fixture.detectChanges();
		await fixture.whenStable();

		const launcher = fixture.nativeElement.querySelector('.plim-chat-launcher__button') as HTMLButtonElement;
		launcher.click();
		fixture.detectChanges();
		await fixture.whenStable();

		expect(host.open()).toBe(false);
		expect(host.closedCount).toBe(1);
	});
});
