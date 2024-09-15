import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthMainComponent } from './auth/auth-main/auth-main.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthVerifyComponent } from './auth/auth-verify/auth-verify.component';
import { DashboardHomeMainComponent } from './dashboard/dashboard-home/dashboard-home/dashboard-home-main/dashboard-home-main.component';
import { ItemMainComponent } from './dashboard/item/item-main/item-main.component';
import { ItemAddComponent } from './dashboard/item/item-add/item-add.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '', component: AuthMainComponent, children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: AuthSignupComponent },
      { path: 'login', component: AuthLoginComponent },
      { path: 'verify', component: AuthVerifyComponent }
    ]

  },
  {
    path: 'dashboard', component: DashboardHomeMainComponent

  },
  {
    path: 'dashboard/item', component: ItemMainComponent

  },
  {
    path: 'dashboard/item/add', component: ItemAddComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// canActivate:[AuthGuard]