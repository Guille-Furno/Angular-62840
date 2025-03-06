import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  standalone: false,
  templateUrl: './nav-menu.component.html',
  styles: []
})
export class NavMenuComponent {

  constructor(private router: Router, private authService: AuthService) {}

  logout(): void {

    this.authService.logout();
  }
}
