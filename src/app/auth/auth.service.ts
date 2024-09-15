import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenShopDTO, OwnerDTO, OwnerLoginDTO, ResponseDTO } from './auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  verifiStatus: boolean

  private loginStatus: boolean


  constructor(private http: HttpClient, private router: Router) {
    this.verifiStatus = false
    this.loginStatus = false
    console.log("auth")
  }

  getIsAuth(): boolean {
    return this.loginStatus;
  }


  openShop(openShopDTO: OpenShopDTO) {
    this.http.post<{ status: boolean, message: string, code: number }>("http://localhost:8080/my-fresh-goods-api/OpenShop", openShopDTO, {
      withCredentials: true,  // Ensures credentials (like cookies) are sent
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((res)=>{
      if(res.status){
        this.router.navigate(['/verify']);
      }else{
        console.log(res.message)
      }
    })
  }

  verifyAccount(verification: string) {

    const dto = {
      verification: verification
    }

    this.http.post<{ status: boolean, message: string, code: number }>("http://localhost:8080/my-fresh-goods-api/Verification", dto, {
      withCredentials: true,  // Ensures credentials (like cookies) are sent
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((res) => {

      if (res.status) {
        this.verifiStatus = true
        this.router.navigate(['/login']);
      } else {
        console.log(res.message)
        this.verifiStatus = false
      }
    })
  }


  login(loginDTO: OwnerLoginDTO) {
    this.http.post<ResponseDTO>("http://localhost:8080/my-fresh-goods-api/OwnerLogin", loginDTO, {
      withCredentials: true,  // Ensures credentials (like cookies) are sent
      headers: {
        'Content-Type': 'application/json'
      }
    }).subscribe((res: ResponseDTO) => {
      if (res.status) {
        console.log(res)
        this.loginStatus = true
        this.router.navigateByUrl("/dashboard");
      } else {
        console.log(res.message)
        this.loginStatus = false
      }
    })

  }

}
