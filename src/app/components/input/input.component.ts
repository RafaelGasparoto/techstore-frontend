import { Component, Input } from '@angular/core';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlPipe } from "../../pipes/form-control.pipe";

@Component({
  selector: 'custom-input',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, FormControlPipe],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() type: string = 'user';
  @Input() control!: AbstractControl;

  constructor() {}
}
