import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  // Recebe um valor
  @Input() valor:number = 0;

  // Manda um Evento
  @Output() mudorValor =new EventEmitter();

  @ViewChild('campoInput') compoValorInput:ElementRef;

  incrementar(){
    console.log(this.compoValorInput);
    
    this.valor++;
    //Realizando o evento Mandar (Mandado um OBJETO)
    this.mudorValor.emit({novoValor: this.valor});
  }
  decrementar(){
    this.valor--;
    this.mudorValor.emit({novoValor: this.valor});

  }

 
  constructor() { }

  ngOnInit() {
  }

}
