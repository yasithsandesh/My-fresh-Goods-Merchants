import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { OwnerLoginDTO } from '../auth.model';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css'
})
export class AuthLoginComponent {
  constructor(private authService:AuthService){}


  onLogin(email:HTMLInputElement,key:HTMLInputElement){

    const dto:OwnerLoginDTO={
      email:email.value,
      ownerCode:key.value
    }

    this.authService.login(dto);

  }
}
