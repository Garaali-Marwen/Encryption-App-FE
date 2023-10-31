import {Component} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private userService: UserService,
              private router: Router,) {
  }

  signIn(req: any) {
    const formData = new FormData();
    formData.append('email', req.email);
    formData.append('password', req.password);
    this.userService.signIn(formData).subscribe({
      next: response => {
        if (response == null) {
          alert("Vérifier vos coordonnées!")
        } else {
          this.userService.setUserId(response.id);
          this.userService.setUserRole(response.role);

          const role = response.role;
          if (role === 'CLIENT') {
            this.router.navigate(['/addClaim']);
          } else if (role == 'ADMIN') {
            this.router.navigate(['/claims']);
          }
        }
      },
      error: error => console.log(error.message)
    })
  }
}
