import { Component } from '@angular/core';
import { ProductService } from '../../service/products';
import { Products } from '../../service/products';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: Products[] = [];
  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();}
}
