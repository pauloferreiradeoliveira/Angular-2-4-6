import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

	private alunos: any[] = [
		{id:1, nome: 'Aluno 01', email: 'Alunos01@email.com' },
		{id:2, nome: 'Aluno 02', email: 'Alunos02@email.com' },
		{id:3, nome: 'Aluno 03', email: 'Alunos03@email.com' },
		{id:4, nome: 'Aluno 04', email: 'Alunos04@email.com' },
		{id:5, nome: 'Aluno 05', email: 'Alunos05@email.com' },
		{id:6, nome: 'Aluno 06', email: 'Alunos06@email.com' },
		{id:7, nome: 'Aluno 07', email: 'Alunos07@email.com' },
		{id:8, nome: 'Aluno 08', email: 'Alunos08@email.com' }
	];

	getAlunos(){
		return this.alunos;
	}

	getAluno(id: number){
		// let - Variavel interno
	  let alunos = this.getAlunos();
	  for (let aluno of alunos) {
		  if(aluno.id == id){
			  return aluno;
		  }
	  }
	  return null;
	}

  constructor() { }

}
