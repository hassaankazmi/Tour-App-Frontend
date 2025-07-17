import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { ExcitingToursComponent } from '../../exciting-tours/exciting-tours.component';
import { BookingComponent } from '../booking/booking.component';
import { NavigationComponent } from '../../navigation/navigation.component';
import { AuthServiceService } from '../../../auth/auth-service.service';

@Component({
  selector: 'app-listing',
  imports: [FormsModule,CommonModule,HeaderComponent,FooterComponent,ExcitingToursComponent,BookingComponent,NavigationComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.getUser();
    }, 3000);
    // throw new Error('Method not implemented.');
  }
  private readonly authenticationService = inject(AuthServiceService);


  getUser() {
  
    this.authenticationService.getuser().subscribe({
      next: (resp) => {
        console.log('resp',resp);
        
      }
    })
  }

}
