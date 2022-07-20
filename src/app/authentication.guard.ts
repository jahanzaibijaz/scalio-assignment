import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate,CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    
      if(localStorage.getItem('token')){
        return true;
        }
        else{
        this.router.navigate(['signIn']);
        return false;
        }
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
    return false;
  }
  
}
