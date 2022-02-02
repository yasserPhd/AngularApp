import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { LoginServService } from "./login-serv.service";
@Injectable({
    providedIn: 'root'
  })
  export class AuthGaurdService implements CanActivate {
  
    constructor(private router: Router,
      private authService: LoginServService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isUserLoggedIn())
        return true;
  
      this.router.navigate(['login']);
      return false;
  
    }
  
  }