import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

	// Esculdar evento
	@HostListener('mouseenter') onMouseOver() {
		// this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
		this.colorFundo = 'yellow';
	}
	@HostListener('mouseleave') onMouseLever() {
	// this._render.setStyle(this._elementRef.nativeElement, 'background-color', '#fff');
	this.colorFundo = '#fff';
	}

	@HostBinding('style.background-color') get setcolor() {
		return this.colorFundo;
	}

	private colorFundo: string;

  constructor() {

	}

}
