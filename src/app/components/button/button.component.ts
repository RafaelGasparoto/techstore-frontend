import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'custom-button',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() type: string = 'button';
  @Input() loading: boolean = false;
  @Input() icon: string = '';
  @Input() color: string = '#39ff11';
}
