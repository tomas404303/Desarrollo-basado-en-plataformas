import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Products[] = [];
  private lastAddedTime: Date | null = null;

  addToCart(product: Products) {
    const existing = this.items.find(p => p.id === product.id);
    if (!existing) {
      this.items.push(product);
      this.lastAddedTime = new Date()
    }
  }

  getItems(): Products[] {
    return this.items;
  }

  getLastAddedTime(): Date | null {
    return this.lastAddedTime;
  }

  removeItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
  }

  clearCart() {
    this.items = [];
    this.lastAddedTime = null;
  }
}
