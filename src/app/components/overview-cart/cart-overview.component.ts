import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'cart-overview',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './cart-overview.component.html',
  styleUrl: './cart-overview.component.scss'
})
export class CartOverviewComponent {

}
