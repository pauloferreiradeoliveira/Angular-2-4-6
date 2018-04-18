import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const cursoRoutes: Routes = [
	{path: '' , component: CursosComponent},
	{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
	{path: ':id' , component: CursoDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forChild(cursoRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
