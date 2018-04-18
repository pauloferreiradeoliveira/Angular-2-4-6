import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

	id: number;
	incricao: Subscription;
	curso: any;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _cursoService: CursosService) {}

	//BehaviorSubject -- Um elemento que pode ser mudado

  ngOnInit() {
		//Tipo de Incrição
		this.incricao = this._route.params.subscribe(
			(params: any) => {
				// Pegandos os Parametros da URL
				this.id = params['id'];
				// Pegando o Curso pelo id
				this.curso = this._cursoService.getCurso(this.id);

				if (this.curso == null){
					// Redirecionado para não encontrado
					this._router.navigate(['cursos/naoEncontrado'])
				}

			}
		)
	}

	ngOnDestroy(){
		// Boas Praticas - para parar de escultar o elemento
		this.incricao.unsubscribe();
	}

}
