import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Meus Componetes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from "./guards/auth.guard";
import { CursosGuard } from "./guards/cursos.guard";
import { AlunosGuard } from "./guards/alunos.guard";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

//Rotas
const appRoutes: Routes =[
	// Caminho, (component): Meu Componete
	{path:'cursos',loadChildren: 'app/cursos/cursos.module#CursosModule',
	canActivate:[AuthGuard],canActivateChild: [CursosGuard],canLoad: [AuthGuard]},
	{path:'alunos', loadChildren: 'app/alunos/alunos.module#AlunosModule',
	canActivate:[AuthGuard],canActivateChild:[AlunosGuard],canLoad: [AuthGuard]},
	{path: 'login', component: LoginComponent},
	{path:'home', component: HomeComponent,canActivate:[AuthGuard],canLoad: [AuthGuard]},
	//Para poder de Direcionar
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: '**', component: PaginaNaoEncontradaComponent}
];


@NgModule({
	imports:[RouterModule.forRoot(appRoutes,{useHash: true})],
	exports: [RouterModule]

})
export class AppRoutingModule {}
