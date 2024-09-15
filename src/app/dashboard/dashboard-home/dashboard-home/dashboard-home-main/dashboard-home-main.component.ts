import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { FindService } from '../../../../find.service';

@Component({
  selector: 'app-dashboard-home-main',
  templateUrl: './dashboard-home-main.component.html',
  styleUrl: './dashboard-home-main.component.css'
})
export class DashboardHomeMainComponent {

  constructor(findService:FindService){

    findService.setView(false);

  }

 

}
