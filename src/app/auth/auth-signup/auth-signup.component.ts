import { Component, inject, OnInit } from '@angular/core';
import { FeaturesService } from '../features.service';
import { FeaturesResponseDTO } from '../features.model';
import { OpenShopDTO, ResponseDTO } from '../auth.model';
import { AuthService } from '../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { AppNotifyComponent } from '../../app-notification/app-notify/app-notify.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrl: './auth-signup.component.css'
})
export class AuthSignupComponent implements OnInit {



  private cityId: string;

  featuresData: FeaturesResponseDTO

  openShopDTO: OpenShopDTO | null = null;

  constructor(private featuresService: FeaturesService, private authService: AuthService, private router: Router) {
    this.featuresData = {
      categoryList: [],
      itemStatusList: [],
      cityList: []
    }

    this.cityId = ""

  }

  ngOnInit() {
    this.featuresService.getAllFeatures().subscribe((response: FeaturesResponseDTO) => {
      this.featuresData = response;

      console.log(this.featuresData)
    });
  }

  openShop(firstName: HTMLInputElement, lastName: HTMLInputElement, email: HTMLInputElement, mobile: HTMLInputElement, gardenName: HTMLInputElement, description: HTMLTextAreaElement, address: HTMLInputElement, postalCode: HTMLInputElement) {
    const dto: OpenShopDTO = {
      owner: {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        mobile: mobile.value
      },
      graden: {
        gardenName: gardenName.value,
        description: description.value
      },
      gradenAddress: {
        address: address.value,
        postalCode: postalCode.value,
        cityId: this.cityId
      }
    }

    console.log(dto)

    this.authService.openShop(dto)



  }





  setCityId(id: number) {
    this.cityId = id.toString()
  }

}
