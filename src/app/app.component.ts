import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {
title = 'Scidélice';
footerUrl = 'https://www.scidelice.com';
footerLink = 'scidelice.com';
toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
    isLoggedIn = false;

   
}
