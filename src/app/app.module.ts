import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignInComponent} from './Components/sign-in/sign-in.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AddClaimComponent } from './Components/add-claim/add-claim.component';
import { ClaimsComponent } from './Components/claims/claims.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HeaderComponent } from './Components/header/header.component';
import { Page403errorComponent } from './Components/page403error/page403error.component';
import { Page404errorComponent } from './Components/page404error/page404error.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    AddClaimComponent,
    ClaimsComponent,
    SignUpComponent,
    HeaderComponent,
    Page403errorComponent,
    Page404errorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
