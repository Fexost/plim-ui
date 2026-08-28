import { signal } from '@angular/core';
import { afterEach, beforeEach, vi } from 'vitest';

import { observeActiveSection } from './observe-active-section';

describe('observeActiveSection', () => {
	beforeEach(() => {
		vi.spyOn(window, 'addEventListener');
		vi.spyOn(window, 'removeEventListener');
	});

	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('sets the first section as active when sections exist', () => {
		const activeSection = signal('');
		const first = document.createElement('section');
		first.id = 'preview';
		Object.defineProperty(first, 'getBoundingClientRect', {
			value: () => ({ top: 120 }),
		});
		const second = document.createElement('section');
		second.id = 'api';
		Object.defineProperty(second, 'getBoundingClientRect', {
			value: () => ({ top: 480 }),
		});

		const topbar = document.createElement('app-docs-topbar');
		Object.defineProperty(topbar, 'getBoundingClientRect', {
			value: () => ({ height: 56 }),
		});
		document.body.append(topbar);

		const observer = observeActiveSection(
			[first, second] as unknown as NodeListOf<HTMLElement>,
			activeSection,
		);

		expect(activeSection()).toBe('preview');
		expect(observer).toBeDefined();
		expect(window.addEventListener).toHaveBeenCalledWith('scroll', expect.any(Function), {
			passive: true,
		});
		observer?.disconnect();
		topbar.remove();
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
