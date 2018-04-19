import { Injectable, EventEmitter } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

	private usuarioAutenticado: boolean = false;

	mostarMenuEmiiter= new EventEmitter<boolean>();

	constructor(private router: Router) { }

	fazerLogin(usuario: Usuario){
		// Verificando o Usuario
		if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){
			this.usuarioAutenticado = true;

			// Emitir - Se motificar
			this.mostarMenuEmiiter.emit(true);

			// Mudar a Navegação
			this.router.navigate(['/']);
		}else{
			this.mostarMenuEmiiter.emit(false);

			this.usuarioAutenticado = false;
		}
		//return this.usuarioAutenticado;
	}

	getUsuarioAutenticado(){
		return this.usuarioAutenticado;
	}
}
