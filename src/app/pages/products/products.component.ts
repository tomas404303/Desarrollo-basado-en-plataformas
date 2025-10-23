import { Component } from '@angular/core';
import { ProductService } from '../../service/products';
import { Products } from '../../service/products';
import { CartService } from '../../service/carrito';
import { CurrencyPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CurrencyPipe,
    UpperCasePipe,
    LowerCasePipe,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: Products[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Products) {
    this.cartService.addToCart(product);
    this.snackBar.open(`${product.name} agregado al carrito 🛒`, 'Cerrar', {
      duration: 2000
    });
  }
}
