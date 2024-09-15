import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMainComponent } from './item-main/item-main.component';
import { ItemAddComponent } from './item-add/item-add.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    ItemMainComponent,
    ItemAddComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatLabel,
    RouterModule
  ]
})
export class ItemModule { }
