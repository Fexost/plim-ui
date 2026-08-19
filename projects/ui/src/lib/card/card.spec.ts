import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';

@Component({
	template: `
		<plim-card>
			<div plimCardHeader>Title</div>
			<p>Body</p>
			<div plimCardFooter>Footer</div>
		</plim-card>
	`,
	imports: [Card],
})
class CardHost {}

@Component({
	template: `<plim-card fill>Body</plim-card>`,
	imports: [Card],
})
class FillCardHost {}

describe('Card', () => {
	describe('layout', () => {
		let fixture: ComponentFixture<CardHost>;
		let host: HTMLElement;

		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [CardHost] }).compileComponents();
			fixture = TestBed.createComponent(CardHost);
			fixture.detectChanges();
			host = fixture.nativeElement.querySelector('plim-card')!;
		});

		it('should create', () => {
			expect(host).toBeTruthy();
		});

		it('should apply plim-card class', () => {
			expect(host.classList.contains('plim-card')).toBe(true);
		});

		it('should project header, body, and footer content', () => {
			expect(host.querySelector('.plim-card__header')?.textContent?.trim()).toBe('Title');
			expect(host.querySelector('.plim-card__body')?.textContent?.trim()).toBe('Body');
			expect(host.querySelector('.plim-card__footer')?.textContent?.trim()).toBe('Footer');
		});
	});

	describe('fill', () => {
		beforeEach(async () => {
			await TestBed.configureTestingModule({ imports: [FillCardHost] }).compileComponents();
		});

		it('should apply fill modifier class', () => {
			const fixture = TestBed.createComponent(FillCardHost);
			fixture.detectChanges();
			const host = fixture.nativeElement.querySelector('plim-card')!;
			expect(host.classList.contains('plim-card--fill')).toBe(true);
		});
	});
});
