import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunosFormComponent } from "./alunos-form/alunos-form.component";
import { AlunosDeactiveGuard } from "../guards/alunos-deactive.guard";
import { AlunoDetalheResolver } from "./guards/alunos-detalhe.resolver";


const alunosRoutes: Routes = [

	// Ordem e Importante
	{path:'', component: AlunosComponent, children:[
		{path:'novo', component: AlunosFormComponent, canDeactivate:[AlunosDeactiveGuard]},
		{path:':id', component: AlunoDetalheComponent,
			resolve: { aluno: AlunoDetalheResolver }
		},
		{path:':id/editar', component: AlunosFormComponent, canDeactivate:[AlunosDeactiveGuard]}
	]},

];

@NgModule({
	imports:[RouterModule.forChild(alunosRoutes)],
	exports:[RouterModule]

})
export class AlunosRoutingModule {}
