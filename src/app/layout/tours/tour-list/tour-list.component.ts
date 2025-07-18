import { Component, inject, OnInit } from '@angular/core';
import { TourService } from '../../../services/tour.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tour-list',
  imports: [CommonModule,FormsModule],
  templateUrl: './tour-list.component.html',
  styleUrl: './tour-list.component.css'
})
export class TourListComponent implements OnInit {

  private readonly toursData: TourService = inject(TourService);

  ngOnInit(): void {
    this.getToursData();
  }


  toursArray: any[] = [];  
  getToursData() {
    this.toursData.getTours().subscribe({
      next: (resp) => {
        this.toursArray = resp?.data;
      },

      error: (error) => {
        console.error('Something went wrong while gettiing tours data');
        
      }
    })
  }
}
