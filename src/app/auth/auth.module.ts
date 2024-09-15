import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgOptimizedImage } from '@angular/common'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthVerifyComponent } from './auth-verify/auth-verify.component';


@NgModule({
  declarations: [AuthLoginComponent,AuthSignupComponent, AuthMainComponent, AuthVerifyComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgOptimizedImage,
    RouterOutlet,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule,

  ]
})
export class AuthModule { }
