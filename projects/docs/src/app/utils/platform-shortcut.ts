/** Returns a platform-appropriate modifier key label for keyboard shortcuts. */
export function getModifierKeyLabel(): string {
	if (typeof navigator === 'undefined') {
		return 'Ctrl';
	}

	return /Mac|iPhone|iPad|iPod/i.test(navigator.platform) ? '⌘' : 'Ctrl';
}
