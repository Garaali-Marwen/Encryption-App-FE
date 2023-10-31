import {Component, OnInit} from '@angular/core';
import {UserService} from "../../Services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  public role: string = "";

  ngOnInit(): void {
    this.role = this.userService.getUserRole();
  }
  constructor(private userService: UserService,
              private router: Router) {
  }

  public logOut(){
    this.userService.logOut();
    this.router.navigateByUrl("/")
  }
}
