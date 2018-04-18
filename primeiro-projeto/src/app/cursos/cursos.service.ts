import { Injectable } from '@angular/core';

//Pode ser injetado
@Injectable()
export class CursosService {

  constructor() { }

  getCurso(){
    return ['Java','Ext JS','Angular'];
  }

}
