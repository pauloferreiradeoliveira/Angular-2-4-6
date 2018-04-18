import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit,OnDestroy {


	cursos: any[];
	pagina: number;
	incricao: Subscription;

	// Recebendo - o Injetect
	constructor(
		private cursoService: CursosService,
		private _route: ActivatedRoute,
		private _router: Router
	){}

  ngOnInit() {
		// Pegando os CURSOS
		this.cursos = this.cursoService.getCursos();

		this.incricao = this._route.queryParams.subscribe(
			(queryParametros: any) =>{
				this.pagina = queryParametros['pagina']
			}
		)
	}

	ngOnDestroy(){
		this.incricao.unsubscribe();
	}

	proximaPagina(pag: number){
		switch (pag){
			case -1:{
				if(this.pagina > 1){
					this.pagina--;
				}
				break;
			}
			case 0:{
				this.pagina++;
				break
			}
			default:{
				this.pagina = pag;
			}
		}
		//[] -> Lugar Para navegar , {}:first -> passar dados, {} -> O parametro a ser mudado
		this._router.navigate(['/cursos'],{ queryParams:{pagina: this.pagina}});
	}

}
