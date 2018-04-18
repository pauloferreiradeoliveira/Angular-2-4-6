import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string ="Paulo Ferreira";
  cursoAngular: boolean = true;
  urlImagem:string = "https://loremflickr.com/320/240/dog";
  valorAtual:string ="";
  valorSalvo:string = "";

  isMouseOver: boolean = false; 

  nomeCurso:string = "Angular";

  valorInicial = 10;
  
  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  pessoa:any ={
    nome:"dev",
    idade:12
  }

  nome:string = "abc";


  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert("Test");
  }
  
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUp(evento : KeyboardEvent){
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }
  constructor() { }

  ngOnInit() {
  }

}
