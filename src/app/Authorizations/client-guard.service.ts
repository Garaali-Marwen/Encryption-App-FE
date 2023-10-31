import { Injectable } from '@angular/core';
import {UserService} from "../Services/user.service";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientGuardService {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const currentUser = this.userService.getUserRole();
    if (currentUser && currentUser === 'CLIENT') {
      return true;
    } else if (!currentUser) {
      this.router.navigate(['/']);
      return false;
    } else {
      this.router.navigate(['/403']);
      return false;
    }
  }}
