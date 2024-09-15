import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FindService } from './find.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'myfresh-goods-merchants';

  isAuthComponent: boolean = false

  constructor(private route: ActivatedRoute, private router: Router, private findService: FindService) {
  
    console.log("c")
  }
  
  ngOnInit(): void {
  
    this.findService.getViewStatusListener().subscribe((status: boolean) => {
      this.isAuthComponent = status;
    })
  }


}
