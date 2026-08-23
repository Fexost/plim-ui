import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidebar } from './sidebar';

@Component({
	template: `
		<plim-sidebar aria-label="Main navigation">
			<div plimSidebarHeader>Header</div>
			<nav plimSidebarNav>Nav</nav>
			<div plimSidebarFooter>Footer</div>
		</plim-sidebar>
	`,
	imports: [Sidebar],
})
class SidebarHost {}

describe('Sidebar', () => {
	describe('layout', () => {
		let fixture: ComponentFixture<SidebarHost>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [SidebarHost] }).compileComponents();
			fixture = TestBed.createComponent(SidebarHost);
			fixture.detectChanges();
			host = fixture.nativeElement.querySelector('plim-sidebar')!;
		});

		it('should create', () => {
			expect(host).toBeTruthy();
		});

		it('should apply plim-sidebar class and be open by default', () => {
			expect(host.classList.contains('plim-sidebar')).toBe(true);
			expect(host.classList.contains('plim-sidebar--open')).toBe(true);
		});

		it('should forward aria-label to the host landmark', () => {
			expect(host.getAttribute('aria-label')).toBe('Main navigation');
			expect(host.getAttribute('role')).toBe('complementary');
		});

		it('should project header, nav, and footer slots', () => {
			const panel = host.querySelector('.plim-sidebar__panel');
			expect(panel).toBeTruthy();
			expect(host.querySelector('.plim-sidebar__header')?.textContent?.trim()).toBe('Header');
			expect(host.querySelector('.plim-sidebar__nav')?.textContent?.trim()).toBe('Nav');
			expect(host.querySelector('.plim-sidebar__footer')?.textContent?.trim()).toBe('Footer');
		});
	});

	describe('state', () => {
		let fixture: ComponentFixture<Sidebar>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [Sidebar] }).compileComponents();
			fixture = TestBed.createComponent(Sidebar);
			fixture.detectChanges();
			host = fixture.nativeElement;
		});

		it('should hide when closed', () => {
			fixture.componentRef.setInput('open', false);
			fixture.detectChanges();
			expect(host.classList.contains('plim-sidebar--open')).toBe(false);
			expect(host.hasAttribute('inert')).toBe(true);
		});

		it('should apply overlay modifier when open in overlay mode', () => {
			fixture.componentRef.setInput('mode', 'overlay');
			fixture.detectChanges();
			expect(host.classList.contains('plim-sidebar--overlay')).toBe(true);
		});

		it('should apply contained modifier when not fixed', () => {
			fixture.componentRef.setInput('fixed', false);
			fixture.detectChanges();
			expect(host.classList.contains('plim-sidebar--contained')).toBe(true);
		});
	});
});
