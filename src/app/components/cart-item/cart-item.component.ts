import { Component } from '@angular/core';
import { IconButtonComponent } from "../icon-button/icon-button.component";

@Component({
  selector: 'cart-item',
  standalone: true,
  imports: [IconButtonComponent, IconButtonComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

}
