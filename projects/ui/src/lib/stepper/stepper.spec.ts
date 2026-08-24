import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step } from './step';
import { Stepper } from './stepper';

@Component({
	template: `
		<plim-stepper>
			<plim-step label="Account">Account form</plim-step>
			<plim-step label="Review" optional>Review copy</plim-step>
		</plim-stepper>
	`,
	imports: [Stepper, Step],
})
class StepperHost {}

describe('Stepper', () => {
	let fixture: ComponentFixture<StepperHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [StepperHost] }).compileComponents();
		fixture = TestBed.createComponent(StepperHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-stepper')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
		expect(host.querySelector('plim-step')).toBeTruthy();
	});

	it('should reveal the next step when Next is clicked', () => {
		const steps = host.querySelectorAll('plim-step');
		expect((steps[0] as HTMLElement).hidden).toBe(false);
		expect((steps[1] as HTMLElement).hidden).toBe(true);

		const next = host.querySelector('.plim-stepper__next') as HTMLButtonElement;
		next.click();
		fixture.detectChanges();

		expect((steps[0] as HTMLElement).hidden).toBe(true);
		expect((steps[1] as HTMLElement).hidden).toBe(false);
	});

	it('should apply a vertical modifier class', async () => {
		await TestBed.resetTestingModule()
			.configureTestingModule({
				imports: [Stepper],
			})
			.compileComponents();

		const verticalFixture = TestBed.createComponent(Stepper);
		verticalFixture.componentRef.setInput('orientation', 'vertical');
		verticalFixture.detectChanges();

		expect(verticalFixture.nativeElement.classList.contains('plim-stepper--vertical')).toBe(true);
	});
});
