import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseDTO } from '../../auth/auth.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient, private router: Router) { }

  addItem(title: string, price: string, qty: string, discription: string, image: File, type: string, category: string, freshness: string) {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("measuringType", type);
    formData.append("price", price);
    formData.append("description", discription);
    formData.append("fresh", freshness);
    formData.append("categoryId", category);
    formData.append("qty", qty);
    formData.append("image1", image);

    this.http.post<ResponseDTO>("http://localhost:8080/my-fresh-goods-api/ItemAdd", formData, {
      withCredentials: true,  
    }).subscribe((res) => {
      if (res.status) {
        this.router.navigate(["/dashboard"])
      } else if (res.message == "session time out") {
        this.router.navigate(["/login"])
      } else {
        console.log(res.message)
      }
    })
  }


}


// String title = request.getParameter("title");
// String measuringType = request.getParameter("measuringType");
// String price = request.getParameter("price");
// String description = request.getParameter("description");
// String fresh = request.getParameter("fresh");
// String categoryId = request.getParameter("categoryId");
// String qty = request.getParameter("qty");

// Part image1 = request.getPart("image1");