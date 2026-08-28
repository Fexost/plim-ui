export interface DocsComponentJumpSection {
	id: string;
	label: string;
}

export const DOCS_COMPONENT_JUMP_SECTIONS: readonly DocsComponentJumpSection[] = [
	{ id: 'preview', label: 'Preview' },
	{ id: 'accessibility', label: 'Accessibility' },
	{ id: 'tokens', label: 'Design tokens' },
	{ id: 'api', label: 'API reference' },
] as const;
