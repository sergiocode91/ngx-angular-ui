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
  @Input() size: 'sm' | 'lg' | 'xl' = 'xl';
  @Input() border: boolean = false;

  get sizeClass() {
    switch (this.size) {
      case 'sm':
        return 'text-xl';
      case 'lg':
        return 'text-2xl';
      case 'xl':
        return 'text-4xl';
      default:
        return 'text-4xl';
    }
  }
}
