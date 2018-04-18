import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs/Subscription';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit, OnDestroy {


	aluno: any;
	inscricao: Subscription;

  constructor(
		private router: Router,
		private route: ActivatedRoute,
		private alunoService: AlunosService
	) {}

  ngOnInit() {
		this.inscricao = this.route.params.subscribe(
			(parma) => {
				let id = parma['id'];

				this.aluno = this.alunoService.getAluno(id);

				if(this.aluno === null){
					this.aluno = {};
				}
			}
		)

	}

	ngOnDestroy(){
		this.inscricao.unsubscribe();
	}

}
