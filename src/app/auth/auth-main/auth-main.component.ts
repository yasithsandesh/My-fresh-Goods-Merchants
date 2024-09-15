import { Component, OnInit } from '@angular/core';
import { FindService } from '../../find.service';

@Component({
  selector: 'app-auth-main',
  templateUrl: './auth-main.component.html',
  styleUrl: './auth-main.component.css'
})
export class AuthMainComponent implements OnInit {
  constructor(private findService: FindService) {
    this.findService.setView(true)
  }
  ngOnInit(): void {
  }

}
