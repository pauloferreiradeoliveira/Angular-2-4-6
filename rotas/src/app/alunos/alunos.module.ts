import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosRoutingModule } from './alunos.routing.module';
import { AlunosService } from './alunos.service';
import { AlunosDeactiveGuard } from '../guards/alunos-deactive.guard';
import { AlunoDetalheResolver } from './guards/alunos-detalhe.resolver';

@NgModule({
  imports: [
		CommonModule,
		FormsModule,
		AlunosRoutingModule
  ],
  declarations: [
		AlunosComponent,
		AlunosFormComponent,
		AlunoDetalheComponent
	],
	providers: [
		AlunosService,
		AlunosDeactiveGuard,
		AlunoDetalheResolver
	]
})
export class AlunosModule { }
