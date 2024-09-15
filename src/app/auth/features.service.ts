import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeaturesResponseDTO } from './features.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  features: FeaturesResponseDTO

  constructor(private http: HttpClient) {
    this.features = {
      categoryList: [],
      itemStatusList: [],
      cityList: []
    }
  }


  getAllFeatures():Observable<FeaturesResponseDTO >{
    return this.http.get<FeaturesResponseDTO>("http://localhost:8080/my-fresh-goods-api/GetFeatures", {
      withCredentials: true,  // Ensures credentials (like cookies) are sent
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }



}
