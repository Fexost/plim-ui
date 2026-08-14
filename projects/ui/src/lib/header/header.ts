import { booleanAttribute, Component, HostBinding, input } from '@angular/core';

@Component({
	selector: 'plim-header',
	imports: [],
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {
	public readonly sticky = input(false, {
		transform: booleanAttribute,
	});

	@HostBinding('class.header--sticky')
	public get isSticky(): boolean {
		return this.sticky();
	}
}
