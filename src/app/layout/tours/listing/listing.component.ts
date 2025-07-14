import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { ExcitingToursComponent } from '../../exciting-tours/exciting-tours.component';
import { BookingComponent } from '../booking/booking.component';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-listing',
  imports: [FormsModule,CommonModule,HeaderComponent,FooterComponent,ExcitingToursComponent,BookingComponent,NavigationComponent],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent {

  


}
