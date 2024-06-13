import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet]
})
export class AppComponent {
title = 'Scidélice, le site pour apprendre à cuisiner avec science!';
footerUrl = 'https://www.scidelice.com';
footerLink = 'scidelice.com';
toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
    isLoggedIn = false;

   
}
