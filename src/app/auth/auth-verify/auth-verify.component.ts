import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-auth-verify',
  templateUrl: './auth-verify.component.html',
  styleUrl: './auth-verify.component.css'
})
export class AuthVerifyComponent {

  constructor(private authService:AuthService){}

  onVerifi(code:HTMLInputElement){
    this.authService.verifyAccount(code.value)
  }

}
