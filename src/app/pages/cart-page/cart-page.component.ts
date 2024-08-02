import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { CartOverviewComponent } from '../../components/overview-cart/cart-overview.component';
import { CartItemComponent } from '../../components/cart-item/cart-item.component';
import { InputComponent } from '../../components/input/input.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [ButtonComponent, CartOverviewComponent, CartItemComponent, InputComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cep: [''],
    });
  }

}
