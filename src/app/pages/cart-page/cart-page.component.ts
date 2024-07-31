import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { CartOverviewComponent } from '../../components/overview-cart/cart-overview.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ButtonComponent, CartOverviewComponent, CartItemComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
