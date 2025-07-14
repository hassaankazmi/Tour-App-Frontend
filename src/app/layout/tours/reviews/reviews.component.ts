import { Component, Input } from '@angular/core';
import { NavigationComponent } from '../../navigation/navigation.component';

@Component({
  selector: 'app-reviews',
  imports: [NavigationComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
  
  
export class ReviewsComponent {
  @Input() label!: string;
  @Input() text!: string;
  @Input() icon!: string;
  
}
