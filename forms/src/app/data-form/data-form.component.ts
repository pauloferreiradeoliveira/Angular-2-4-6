import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { DropdownService } from '../shared/services/dropdown.service.ts.service';
import { EstadoInterface } from '../model/estado.interface';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;
  estados: EstadoInterface[];

  constructor(private formBuilder: FormBuilder, private http: Http, private dropdrow: DropdownService) { }

  ngOnInit() {

   /* this.formulario = new FormGroup({
      nome: new FormControl('Paulo'),
      email: new FormControl(null)
    });
    */
   this.dropdrow.getEstadoBr().subscribe(dados => console.log(dados));

    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.email, Validators.required]],
      cep: [null, Validators.required],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });

  }

  aplicarCssErro(campo: string) {
    return {'is-invalid': this.verificaValidToucched(campo) };
  }

  verificarEmail() {
    const campoEmail = this.formulario.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
  }

  verificaValidToucched(campo: string) {
    const cm = this.formulario.get(campo);
    return !cm.valid  && (cm.touched || cm.dirty);
  }

  onSubmit() {

    if (this.formulario.valid) {

      this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(dados => {
          console.log(dados);
          // reseta o form
          this.restar();
        }, (error: any) => alert('error'));
      // console.log(this.formulario);
      } else {
       this.verificaValidacoesForm(this.formulario);
      }
  }

  verificaValidacoesForm(form: FormGroup) {
    Object.keys(form.controls).forEach(
      x => {
        const controle = form.get(x);
        controle.markAsDirty();
        if (controle instanceof FormGroup) {
          this.verificaValidacoesForm(controle);
        }
      });
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    cep = cep.replace(/\D/g, '');
    if (cep !== '') {
     const validacep = /^[0-9]{8}$/;
     if (validacep.test(cep)) {
       // Buscar os Dados
       this.http.get(`https://viacep.com.br/ws/${cep}/json`)
         .map(dados => dados.json())
         .subscribe(dados => this.populaDadosForm(dados));
     }
    }
   }


  populaDadosForm(dados) {
    this.formulario.patchValue({
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

  restar() {
    this.formulario.reset();
  }
}
