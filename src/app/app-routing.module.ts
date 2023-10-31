import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddClaimComponent} from "./Components/add-claim/add-claim.component";
import {SignUpComponent} from "./Components/sign-up/sign-up.component";
import {ClaimsComponent} from "./Components/claims/claims.component";
import {Page403errorComponent} from "./Components/page403error/page403error.component";
import {AdminGuardService} from "./Authorizations/admin-guard.service";
import {AuthenticatedGuardService} from "./Authorizations/authenticated-guard.service";
import {SignInComponent} from "./Components/sign-in/sign-in.component";
import {Page404errorComponent} from "./Components/page404error/page404error.component";
import {ClientGuardService} from "./Authorizations/client-guard.service";

const routes: Routes = [
  {path: '', component:SignInComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'signUp', component:SignUpComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'addClaim', component:AddClaimComponent, canActivate: [ClientGuardService]},
  {path: 'claims', component:ClaimsComponent, canActivate: [AdminGuardService]},
  {path: 'userClaims', component:ClaimsComponent, canActivate: [ClientGuardService]},
  {path: '403', component:Page403errorComponent},
  {path: '**', component:Page404errorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
