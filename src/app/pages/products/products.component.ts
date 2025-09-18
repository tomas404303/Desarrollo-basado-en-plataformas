import { Component } from '@angular/core';
import { ProductService } from '../../service/products';
import { Products } from '../../service/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: Products[] = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();}
}
