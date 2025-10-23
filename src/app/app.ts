import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from './carrito-dialog/carrito-dialog';
import { CartService } from './service/carrito';
import { ResenasModule } from './reseñas/resenas-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MatButtonModule,
    MatIconModule,
    ResenasModule

  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog, private cartService: CartService) {}

  openCart() {
    this.dialog.open(CartDialogComponent, {
      width: '400px',
      panelClass: 'cart-dialog',
      data: { items: this.cartService.getItems() }
    });
  }
}
