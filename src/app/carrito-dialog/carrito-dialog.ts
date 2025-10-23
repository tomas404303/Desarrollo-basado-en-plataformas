import { Component, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../service/carrito';
import { Products } from '../service/products';
import { interval, Subscription } from 'rxjs';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carrito-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule, CurrencyPipe],
  templateUrl: './carrito-dialog.html',
  styleUrls: ['./carrito-dialog.css']
})
export class CartDialogComponent implements OnInit, OnDestroy {
  items: Products[] = [];
  elapsedSeconds: number = 0;
  private timerSubscription?: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items = this.cartService.getItems();
    this.startTimer();
  }

  startTimer() {
    const lastTime = this.cartService.getLastAddedTime();
    if (lastTime) {
      this.timerSubscription = interval(1000).subscribe(() => {
        const now = new Date();
        this.elapsedSeconds = Math.floor((now.getTime() - lastTime.getTime()) / 1000);
      });
    }
  }

  ngOnDestroy() {
    this.timerSubscription?.unsubscribe();
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
    this.items = this.cartService.getItems();
  }

  clearCart() {
    this.cartService.clearCart();
    this.items = [];
    this.elapsedSeconds = 0;
  }

  checkout() {
    alert('Compra realizada correctamente');
    this.clearCart();
  }
}
