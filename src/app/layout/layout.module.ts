import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';



const tourRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tours/tours.module').then(module => module.ToursModule)
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(tourRoutes),
  ]
})
export class LayoutModule { }
