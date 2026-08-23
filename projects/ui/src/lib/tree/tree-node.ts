import { Component, contentChildren, input, model } from '@angular/core';

@Component({
	selector: 'plim-tree-node',
	host: {
		class: 'plim-tree-node',
		role: 'treeitem',
		'[class.plim-tree-node--expanded]': 'hasChildren() && expanded()',
		'[attr.aria-expanded]': 'hasChildren() ? expanded() : null',
	},
	templateUrl: './tree-node.html',
	styleUrl: './tree-node.scss',
})
export class TreeNode {
	public readonly label = input.required<string>();
	public readonly expanded = model(false);
	public readonly nodes = contentChildren(TreeNode);

	protected hasChildren(): boolean {
		return this.nodes().length > 0;
	}

	protected toggle(): void {
		if (!this.hasChildren()) {
			return;
		}

		this.expanded.update((isExpanded) => !isExpanded);
	}
}
