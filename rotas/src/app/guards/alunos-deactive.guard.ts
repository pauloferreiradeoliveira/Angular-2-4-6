import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AlunosFormComponent } from '../alunos/alunos-form/alunos-form.component';
import { AlunosComponent } from '../alunos/alunos.component';
import { Formscandeactivee } from './formscandeactivee';

@Injectable()
export class AlunosDeactiveGuard implements CanDeactivate<Formscandeactivee> {


	canDeactivate(
		component: Formscandeactivee,
    next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean
		{
			return component.podeDesativar();
		}

}
