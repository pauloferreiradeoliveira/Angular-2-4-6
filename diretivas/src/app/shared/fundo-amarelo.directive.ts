import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {


  constructor(private _elementRef: ElementRef, private _render: Renderer2) {


		// console.log(_elementRef);
		// this._elementRef.nativeElement.style.backgroundColor = 'yellow';

		this._render.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
	}


}
