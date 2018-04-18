import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";



@Injectable()
export class CursosService{

  private _curso: string[] = ['Angular2', 'Java', 'Phonegap'];

  emitirCursosCriado = new EventEmitter<string>();
  static criouNovoCursos = new EventEmitter<string>();

  constructor(private _logService: LogService){

  }
  getCursos(){
    return this._curso;
  }

  addCurso(curso: string){
    this._logService.consoleLog(`Criando um novo Curso ${curso}`)
    this._curso.push(curso)
    this.emitirCursosCriado.emit(curso);
    CursosService.criouNovoCursos.emit(curso);
  }
}
