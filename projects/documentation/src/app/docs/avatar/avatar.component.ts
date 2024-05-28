import { Component } from '@angular/core';
import { HeadingComponent, PropsComponent } from '@components/index';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [HeadingComponent, PropsComponent],
  templateUrl: './avatar.component.html',
  styles: ``
})
export class AvatarComponent {
  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'radius',
        type: `'full' | 'lg' | 'md' | 'sm'`,
        default: `full`,
      },
      {
        property: 'size',
        type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
        default: `lg`,
      },
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: `default`,
      },
    ],
  };
}
