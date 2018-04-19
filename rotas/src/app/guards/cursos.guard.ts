import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CursosGuard implements CanActivateChild {
  canActivateChild(
    next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot,
		): Observable<boolean> | Promise<boolean> | boolean {
    return true;
	}


}
