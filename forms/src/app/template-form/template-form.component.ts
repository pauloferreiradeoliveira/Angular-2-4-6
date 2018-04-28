import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Usuario } from '../model/usuario';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  usuario: Usuario = {
    nome: 'loiane',
    email: 'loiane@email.com'
  };

  onSubmit(form) {
    // let o: boolean;

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .map(res => res)
      .subscribe(dados => console.log(dados))
    ;
    console.log(form.value);
    console.log(this.usuario);
  }

  verificaValidToucched(campo) {
    return !campo.valid  && campo.touched;
  }

  aplicarCssErro(campo) {
    return {'is-invalid': this.verificaValidToucched(campo) };
  }

  consultaCEP(cep, form) {
   cep = cep.replace(/\D/g, '');

   if (cep !== '') {
    const validacep = /^[0-9]{8}$/;
    if (validacep.test(cep)) {
      // Buscar os Dados
      this.http.get(`https://viacep.com.br/ws/${cep}/json`)
        .map(dados => dados.json())
        .subscribe(dados => this.populaDadosForm(dados, form));
    }
   }
  }

  populaDadosForm(dados, form) {

    form.form.patchValue({
      endereco: {
       // cep: dados.cep ,
        Complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });

  }

  constructor(private http: Http) { }

  ngOnInit() {
  }

}
