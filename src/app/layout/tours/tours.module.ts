import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from 'express';
import { ListingComponent } from './listing/listing.component';
import { BookingComponent } from './booking/booking.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ExcitingToursComponent } from '../exciting-tours/exciting-tours.component';
import { TourListComponent } from './tour-list/tour-list.component';


const tourRoutes: Routes = [
  {
    path: 'list',
    component:ListingComponent
  },
  {
    path: 'booking',
    component:BookingComponent 
  },
  {
    path: 'review',
    component:ReviewsComponent
  },
  {
    path: 'about',
    component:ExcitingToursComponent
  },
  {
    path: 'tourList',
    component:TourListComponent
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
