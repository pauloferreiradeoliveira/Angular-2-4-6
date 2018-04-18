import { Injectable } from '@angular/core';

//Uma Classe - pode ser chamada no Construtor
@Injectable()
export class CursosService {

  constructor() {}

	// Pegandos os Cursos
  getCursos(){
		return [
			{id: 1, nome: 'Angular2'},
			{id: 2, nome: 'Java'},
			{id: 3, nome: 'C#'},
			{id: 4, nome: 'JavaScript'},
		]
  }

	// Selecionado o CURSO dentro dos Cursos
  getCurso(id: number){
		// let - Variavel interno
	  let cursos = this.getCursos();
	  for (let curso of cursos) {
		  if(curso.id == id){
			  return curso;
		  }
	  }
	  return null;
  }

}
