import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-app-notify',
  templateUrl: './app-notify.component.html',
  styleUrl: './app-notify.component.css'
})
export class AppNotifyComponent {
  data = inject(MAT_DIALOG_DATA);
}
