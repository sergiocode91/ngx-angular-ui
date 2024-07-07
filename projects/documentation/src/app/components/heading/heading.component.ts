import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heading.component.html',
  styles: ``
})
export class HeadingComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() size: 'xs' | 'sm' | 'lg' | 'xl' = 'xl';
  @Input() border: boolean = false;
}
