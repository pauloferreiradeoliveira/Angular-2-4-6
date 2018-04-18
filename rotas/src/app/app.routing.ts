import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// Meus Componetes
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

//Rotas
const APP_ROUTE: Routes =[
	// Caminho, (component): Meu Componete
	{path:'', component: HomeComponent},
	{path:'cursos' , component: CursosComponent},
//	{path:'curso/:id' , component: CursoDetalheComponent},
//	{path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
	{path: 'login', component: LoginComponent}
];

// Exportando a Rota
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTE);
