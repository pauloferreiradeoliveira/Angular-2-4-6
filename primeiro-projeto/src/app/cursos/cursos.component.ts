import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal:string;

  cursos:string[];

  constructor(private cursoServive: CursosService) { 
    this.nomePortal = "Http://loiane.trainig";

    //Pegando os Dados 
    this.cursos =this.cursoServive.getCurso();

    
    //var servico = new CursosService();
  }

  ngOnInit() {
  }

}
