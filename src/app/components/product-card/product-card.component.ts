import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../models/Product';
import { CurrencyFormatPipe } from "../../pipes/currency-format.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-card',
  standalone: true,
  imports: [RouterLink, CurrencyFormatPipe, CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  constructor(private render: Renderer2) {}

  ngOnInit(): void {

  }
}
