import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../services/auth-service.service';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  private readonly route = inject(Router);
  private readonly authenticationService = inject(AuthServiceService);

  logout() {
    this.authenticationService.logout(); 
    this.route.navigate(['/']);
  }
}
