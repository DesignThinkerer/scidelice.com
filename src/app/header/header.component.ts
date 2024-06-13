import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
    title = 'app';
    isLoggedIn = false;
}
