import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tree } from './tree';
import { TreeNode } from './tree-node';

@Component({
	template: `
		<plim-tree>
			<plim-tree-node label="Parent">
				<plim-tree-node label="Child" />
			</plim-tree-node>
		</plim-tree>
	`,
	imports: [Tree, TreeNode],
})
class TreeHost {}

describe('Tree', () => {
	let fixture: ComponentFixture<TreeHost>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TreeHost] }).compileComponents();
		fixture = TestBed.createComponent(TreeHost);
		fixture.detectChanges();
		host = fixture.nativeElement.querySelector('plim-tree')!;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
		expect(host.querySelector('plim-tree-node')).toBeTruthy();
	});

	it('should expand a parent node when its toggle is clicked', () => {
		const parent = host.querySelector('plim-tree-node') as HTMLElement;
		expect(host.getAttribute('role')).toBe('tree');
		expect(parent.getAttribute('role')).toBe('treeitem');
		expect(parent.getAttribute('aria-expanded')).toBe('false');

		const toggle = parent.querySelector('.plim-tree-node__toggle') as HTMLButtonElement;
		toggle.click();
		fixture.detectChanges();

		expect(parent.getAttribute('aria-expanded')).toBe('true');
	});
});
