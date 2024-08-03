import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shipping',
  standalone: true,
  imports: [ButtonComponent, InputComponent],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.scss'
})
export class ShippingComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cep: [''],
    });
  }
}
