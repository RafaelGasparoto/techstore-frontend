import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProductsListComponent } from "../../components/products-list/products-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'home-page',
  standalone: true,
  imports: [HeaderComponent, ProductsListComponent, RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
