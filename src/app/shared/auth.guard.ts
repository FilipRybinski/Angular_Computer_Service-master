import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private _router: Router) { }
  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    alert("No access without logged in  ")
    this._router.navigate(['login']);
    return false;
  }

}
