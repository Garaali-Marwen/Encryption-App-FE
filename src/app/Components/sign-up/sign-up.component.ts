import { Component } from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  public emailExist = false;
  constructor(private userService: UserService,
              private router: Router) {
  }

  signUp(signUpForm: any) {
    this.userService.signUp(signUpForm).subscribe({
      next: response => {
        this.router.navigateByUrl("/")
      },
      error: error => console.log(error)
    })
  }

  verifEmail(email: string){
    this.userService.emailVerif(email).subscribe({
      next: response => this.emailExist = response,
      error: err => console.log(err)
    })
  }
}
