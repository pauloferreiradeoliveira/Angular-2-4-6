import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

	@HostListener('mouseenter') onMouseOver() {
		//! this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
		this.colorFundo = this.hightlingh;
	}
	@HostListener('mouseleave') onMouseLever() {
	//! this._render.setStyle(this._elementRef.nativeElement, 'background-color', '#fff'); -- Forma Errada
	this.colorFundo = this.defaultColor;
	}

	//* Pegando o Estilos BACKGROUNG
	@HostBinding('style.background-color') colorFundo: string;

	@Input() defaultColor: string ='#fff';
	@Input('appHighlight') hightlingh: string= 'yellow';

	ngOnInit(){
		this.colorFundo = this.defaultColor;
	}


  constructor() { }

}
