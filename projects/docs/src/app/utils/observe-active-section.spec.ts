import { signal } from '@angular/core';
import { afterEach, beforeEach, vi } from 'vitest';

import { observeActiveSection } from './observe-active-section';

describe('observeActiveSection', () => {
	beforeEach(() => {
		vi.stubGlobal(
			'IntersectionObserver',
			class {
				public observe = vi.fn();
				public disconnect = vi.fn();

				public constructor(
					_callback: IntersectionObserverCallback,
					_options?: IntersectionObserverInit,
				) {}
			},
		);
	});

	afterEach(() => {
		vi.unstubAllGlobals();
	});

	it('sets the first section as active when sections exist', () => {
		const activeSection = signal('');
		const first = document.createElement('section');
		first.id = 'preview';
		const second = document.createElement('section');
		second.id = 'api';

		const observer = observeActiveSection(
			[first, second] as unknown as NodeListOf<HTMLElement>,
			activeSection,
		);

		expect(activeSection()).toBe('preview');
		expect(observer).toBeDefined();
		observer?.disconnect();
	});

	it('returns undefined when no sections are provided', () => {
		const activeSection = signal('');
		const observer = observeActiveSection(
			[] as unknown as NodeListOf<HTMLElement>,
			activeSection,
		);

		expect(observer).toBeUndefined();
		expect(activeSection()).toBe('');
	});
});
