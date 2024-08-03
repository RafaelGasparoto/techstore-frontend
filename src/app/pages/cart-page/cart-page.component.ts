import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { CartOverviewComponent } from '../../components/overview-cart/cart-overview.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { InputComponent } from '../../components/input/input.component';
import { ShippingComponent } from '../../components/shipping/shipping.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    ButtonComponent,
    CartOverviewComponent,
    CartItemComponent,
    InputComponent,
    ShippingComponent,
    RouterLink
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {


}
