import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'icon-button',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.scss'
})
export class IconButtonComponent {
  @Input() icon: string = '';
  @Input() color: string = '#2ba2da';
  @Input() buttonSize: string = '3';
}
