import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() { }

  consoleLog(menssagem: string){
    console.log(menssagem);

  }


}
