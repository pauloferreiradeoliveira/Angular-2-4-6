import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs/Subscription';
import { Aluno } from '../../model/alunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

	inscricao: Subscription;
	aluno: Aluno;

  	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private alunoService: AlunosService
	) {}

	editarAluno(){
		this.router.navigate(['/alunos', this.aluno.id, 'editar']);
	}

  	ngOnInit() {
		/*this.inscricao = this.route.params.subscribe(
			(param: any) => {
				let id = param['id'];

				this.aluno = this.alunoService.getAluno(id);

				if (this.aluno == null){
					// Redirecionado para não encontrado
					this.router.navigate(['/naoEncontrado'])
				}

			}

		)
		*/

		this.inscricao = this.route.data.subscribe(
			(info: {aluno: Aluno}) => {
				this.aluno = info.aluno;
			}
		);
	}

	ngOnDestroy(){
		this.inscricao.unsubscribe();
	}

}
