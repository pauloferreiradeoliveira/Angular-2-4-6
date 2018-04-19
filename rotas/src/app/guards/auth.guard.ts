import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../login/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
		): Observable<boolean> | boolean{

			return this.verificarAcesso()
	}

	private verificarAcesso(): boolean{

		if (this.authService.getUsuarioAutenticado()){
			return true;
		}
		this.router.navigate(['/login']);
		return false;

	}

		canLoad(route: Route) {
			return this.verificarAcesso();
		}


  constructor(private authService: AuthService, private router: Router) { }

}
