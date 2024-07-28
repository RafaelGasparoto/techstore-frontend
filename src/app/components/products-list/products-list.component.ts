import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { CurrencyFormatPipe } from "../../pipes/currency-format.pipe";
import { RouterLink } from '@angular/router';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'products-list',
  standalone: true,
  imports: [CommonModule, CurrencyFormatPipe, RouterLink, ProductCardComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.scss'
})
export class ProductsListComponent {
  products: Array<Product> = [];

  constructor() {
    for (let index = 0; index < 10; index++) {
      this.products.push(this.mock(index));
    }
  }

  mock(id: number) {
    if (id % 2 == 0) {
      return new Product(id, 1, 'Produto nome', 'descrição', 10.31 + id, 0, 100 - id);
    } else {
      return new Product(id, 1, 'Produto nome', 'descrição', 10.31 + id, 10.44 - id, 100 - id);
    }
  }
}
