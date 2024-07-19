import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { InputComponent } from '../input/input.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    RouterLink,
    ButtonComponent,
    InputComponent,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    IconButtonComponent,
    MatIconModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  form: FormGroup;
  collapsed: boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      search: [''],
    });
  }

  colap() {
    this.collapsed = !this.collapsed;
  }
}
