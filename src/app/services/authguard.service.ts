import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private userService: UserService , private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot 
  ): Observable<boolean> | Promise<boolean> | boolean {
    
    if(this.userService.getUserLoggedIn()){
      return true;
    } else {
      this.router.navigate(['login'])
      window.alert("You don't have permission to view this page");
      return false;
    }
  }
}
