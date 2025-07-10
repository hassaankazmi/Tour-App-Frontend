import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';
import { ListingComponent } from './listing/listing.component';
import { BookingComponent } from './booking/booking.component';
import { ReviewsComponent } from './reviews/reviews.component';


const tourRoutes: Routes = [
  {
    path: '',
    component:ListingComponent
  },
  {
    path: 'booking',
    component:BookingComponent 
  },
  {
    path: 'review',
    component:ReviewsComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(tourRoutes),
  ],

})
export class ToursModule { }
