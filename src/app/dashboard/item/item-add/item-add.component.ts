import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Freshness } from '../item.model';
import { FeaturesService } from '../../../auth/features.service';
import { Category } from '../../../auth/features.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrl: './item-add.component.css'
})
export class ItemAddComponent implements OnInit {

  private freshness: Freshness[]

  private selectFreshness:Freshness ;

  imageUrl:string

  image:File|null = null;

  categoryList:Category[]

  selectedCategory:number

  selectedType:string

  

  constructor(private http: HttpClient,private featuresService:FeaturesService,private itemService:ItemService) {
    this.freshness = [
      { id: 1, name: "1D", value: 1 },
      { id: 2, name: "2D", value: 2 },
      { id: 3, name: "3D", value: 3 },
      { id: 4, name: "4D", value: 4 },
      { id: 5, name: "5D", value: 5 },
      { id: 6, name: "6D", value: 6 },
      { id: 7, name: "7D", value: 7 },
      { id: 8, name: "8D", value: 8 },
      { id: 9, name: "9D", value: 9 },
      { id: 10, name: "10D", value: 10 },
    ]

    this.selectFreshness = {
      id:0,
      name:"",
      value:0
    }
    this.imageUrl =""

    this.categoryList = []

    this.selectedCategory = 0;
    this.selectedType = "";
  }

  ngOnInit(): void {
    this.featuresService.getAllFeatures().subscribe((res)=>{
      this.categoryList = res.categoryList;
    })
  }

  getFreshnessList(){
    return this.freshness;
  }

  addFresh(freshness:Freshness){
    this.selectFreshness = freshness;
  }

  getSelectedFreshness():Freshness{
    return this.selectFreshness as Freshness
  }


  onImagePiked(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.image =  file
     const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result as string;
      }
      reader.readAsDataURL(file)
    }
  }


  addItem(title:string,price:string,qty:string,discription:string){
   this.itemService.addItem(title,price,qty,discription,this.image as File,this.selectedType,this.selectedCategory.toString(),this.selectFreshness.value.toString())
  }


}
