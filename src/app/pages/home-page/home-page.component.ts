import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsListComponent } from "../../components/products-list/products-list.component";

@Component({
  standalone: true,
  imports: [HeaderComponent, ProductsListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
