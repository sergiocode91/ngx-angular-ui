import { Component } from '@angular/core';
import { HeadingComponent, PropsComponent } from '@components/index';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [HeadingComponent, PropsComponent],
  templateUrl: './badge.component.html',
  styles: ``
})
export class BadgeComponent {
  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: 'default',
      },
      {
        property: 'position',
        type: `'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'`,
        default: 'top-right',
      },
      {
        property: 'alert',
        type: 'boolean',
        default: 'false',
      },
      {
        property: 'border',
        type: 'boolean',
        default: 'false',
      },
    ],
  };
}
