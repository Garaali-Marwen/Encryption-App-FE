import {Component, OnInit} from '@angular/core';
import {ClaimService} from "../../Services/claim.service";
import {UserService} from "../../Services/user.service";

@Component({
  selector: 'app-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.css']
})
export class ClaimsComponent implements OnInit {

  public claims: any[] = []

  ngOnInit(): void {
    if (this.userService.getUserRole() === 'CLIENT') {
      this.claimService.getClaimsByUserId(this.userService.getUserId()).subscribe({
        next: response => this.claims = response,
        error: err => console.log(err)
      })
    } else {
      this.claimService.getClaims().subscribe({
        next: response => this.claims = response,
        error: error => console.log(error)
      })
    }
  }

  constructor(private claimService: ClaimService,
              private userService: UserService) {
  }

}
