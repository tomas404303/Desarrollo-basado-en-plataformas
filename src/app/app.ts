import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,

  ],
  templateUrl: 'app.html',
  styleUrl: './app.css'
})
export class AppComponent  {
  articulos: any;
  constructor() {}
}
