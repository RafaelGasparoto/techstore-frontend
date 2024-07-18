import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { FormControlPipe } from "../../pipes/form-control.pipe";
import { ButtonComponent } from "../../components/button/button.component";
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    FormControlPipe,
    ButtonComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  tryLogin() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['/home']);
    }, 1000);
  }
}
