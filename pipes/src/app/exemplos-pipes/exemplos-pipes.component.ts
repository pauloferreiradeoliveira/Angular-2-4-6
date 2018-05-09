import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any ={
    titulo:'O Guia do Mochileiro Das Galáxias - Série o Mochileiro Das Galáxias',
    rating: 5,
    numeroPaginas:208,
    preco:20.90,
    dataLancamento:new Date(1979,10,12),
    url:'https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=2851521&qld=90&l=430&a=-1'
  };

  livros: string[] = ['Angular2', 'Java'];

  filtro: string;
  constructor() { }

  ngOnInit() {
  }

  addCurso(newLirvro: string){
    this.livros.push(newLirvro);
  }
  
// aplicando filtro
  obterCurso(){
    if(this.livros.length === 0 || this.filtro === undefined){
      return this.livros;
    }

    return this.livros.filter(
      (v) =>{
       if( v.toLocaleLowerCase().indexOf(this.filtro.toLowerCase()) >= 0){
         return true;
       }
       return false;
      }
    )
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor Assincrono'),2000)
  })

  valorAsync2 = Observable.interval(2000)
    .map(valor =>'Valor Assincrono' );
}
