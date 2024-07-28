import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductDetailComponent } from "../../components/product-detail/product-detail.component";
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'product-detail-page',
  standalone: true,
  imports: [HeaderComponent, ProductDetailComponent, ButtonComponent],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss'
})
export class ProductDetailPageComponent {

}
