import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DropdownService {

constructor(private http: Http) { }

getEstadoBr() {
  return this.http.get('https://raw.githubusercontent.com/felipefdl/cidades-estados-brasil-json/master/Estados.json')
    .map((res: Response) => res.json());

}

}
