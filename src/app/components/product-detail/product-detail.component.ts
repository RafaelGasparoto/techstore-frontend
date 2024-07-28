import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { CurrencyFormatPipe } from "../../pipes/currency-format.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CurrencyFormatPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) {
    const id = this.activatedRoute.snapshot.params["id"];
    this.product = this.mock(id);
  }

  mock(id: number) {
    return new Product(id, 1, 'Produto nome', 'descrição', 10.31 + id, 10.44 - id, 100 - id);
  }
}
