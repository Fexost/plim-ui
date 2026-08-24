import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timeline } from './timeline';
import { TimelineItem } from './timeline-item';

describe('Timeline', () => {
	let fixture: ComponentFixture<Timeline>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [Timeline] }).compileComponents();
		fixture = TestBed.createComponent(Timeline);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.nativeElement.classList.contains('plim-timeline')).toBe(true);
	});

	it('should apply a horizontal modifier class', async () => {
		await TestBed.resetTestingModule()
			.configureTestingModule({
				imports: [Timeline],
			})
			.compileComponents();

		fixture = TestBed.createComponent(Timeline);
		fixture.componentRef.setInput('orientation', 'horizontal');
		fixture.detectChanges();

		expect(fixture.nativeElement.classList.contains('plim-timeline--horizontal')).toBe(true);
	});
});

describe('TimelineItem', () => {
	let fixture: ComponentFixture<TimelineItem>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TimelineItem] }).compileComponents();
		fixture = TestBed.createComponent(TimelineItem);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.nativeElement.classList.contains('plim-timeline-item')).toBe(true);
	});
});
