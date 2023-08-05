import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppFoodListComponent } from './app-food-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  


@NgModule({
  declarations: [
    AppFoodListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
   ],
  providers: [],
  bootstrap: [AppFoodListComponent]
})
export class AppModule { }
