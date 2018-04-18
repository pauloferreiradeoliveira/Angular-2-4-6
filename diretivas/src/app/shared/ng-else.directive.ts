import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

	//Recebe um input com uma Codição e a nega
	@Input('ngElse') set NgElse(condition: boolean){
		if(!condition){
			//Criar o Templete
			this._view.createEmbeddedView(this._templete);
		}
		else{
			//Limpa o Templete
			this._view.clear();
		}
	}

  constructor(private _templete: TemplateRef<any>,private _view: ViewContainerRef ) { }

}
