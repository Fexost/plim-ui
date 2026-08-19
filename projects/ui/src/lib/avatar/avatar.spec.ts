import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avatar } from './avatar';

@Component({
	template: `<plim-avatar>AB</plim-avatar>`,
	imports: [Avatar],
})
class InitialsAvatarHost {}

@Component({
	template: `<plim-avatar src="/avatar.png" alt="User avatar" />`,
	imports: [Avatar],
})
class ImageAvatarHost {}

describe('Avatar', () => {
	describe('initials fallback', () => {
		let fixture: ComponentFixture<InitialsAvatarHost>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [InitialsAvatarHost] }).compileComponents();
			fixture = TestBed.createComponent(InitialsAvatarHost);
			fixture.detectChanges();
			host = fixture.nativeElement.querySelector('plim-avatar')!;
		});

		it('should create', () => {
			expect(host).toBeTruthy();
		});

		it('should apply plim-avatar class and default size modifier', () => {
			expect(host.classList.contains('plim-avatar')).toBe(true);
			expect(host.classList.contains('plim-avatar--md')).toBe(true);
		});

		it('should render projected initials in the fallback', () => {
			const fallback = host.querySelector('.plim-avatar__fallback');
			expect(fallback?.textContent?.trim()).toBe('AB');
		});
	});

	describe('image', () => {
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [ImageAvatarHost] }).compileComponents();
			const fixture = TestBed.createComponent(ImageAvatarHost);
			fixture.detectChanges();
			host = fixture.nativeElement.querySelector('plim-avatar')!;
		});

		it('should render an image when src is provided', () => {
			const image = host.querySelector('img.plim-avatar__image') as HTMLImageElement;
			expect(image).toBeTruthy();
			expect(image.src).toContain('/avatar.png');
			expect(image.alt).toBe('User avatar');
		});
	});

	describe('size', () => {
		let fixture: ComponentFixture<Avatar>;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [Avatar] }).compileComponents();
			fixture = TestBed.createComponent(Avatar);
			fixture.detectChanges();
		});

		it('should apply size modifier classes', () => {
			fixture.componentRef.setInput('size', 'sm');
			fixture.detectChanges();
			expect(fixture.nativeElement.classList.contains('plim-avatar--sm')).toBe(true);

			fixture.componentRef.setInput('size', 'lg');
			fixture.detectChanges();
			expect(fixture.nativeElement.classList.contains('plim-avatar--lg')).toBe(true);
		});
	});
});
