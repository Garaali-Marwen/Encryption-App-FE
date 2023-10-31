import {Component, OnInit} from '@angular/core';
import {ClaimService} from "../../Services/claim.service";
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  public user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  constructor(private claimService: ClaimService,
              private userService: UserService,
              private router: Router) {
  }

  addClaim(claimForm: any) {
    claimForm.user = {id: this.userService.getUserId()};
    this.claimService.addClaim(claimForm).subscribe({
      next: response => {
        this.router.navigateByUrl("/userClaims")
      },
      error: error => console.log(error.message)
    })
  }

  ngOnInit(): void {
    this.userService.getUserById(this.userService.getUserId()).subscribe({
      next: response => this.user = response,
      error: error => console.log(error)
    })
  }
}
