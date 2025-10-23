import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CartDialogComponent } from '../../carrito-dialog/carrito-dialog';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  constructor(private dialog: MatDialog) {}

  openCartDialog() {
    this.dialog.open(CartDialogComponent, {
      width: '400px',
      panelClass: 'cart-modal'
    });
  }
}
