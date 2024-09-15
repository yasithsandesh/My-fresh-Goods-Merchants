import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { AppNotifyComponent } from './app-notify/app-notify.component';


@NgModule({
  declarations: [
    AppNotifyComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ]
})
export class AppNotificationModule { }
