import { Component } from '@angular/core';
import { HeadingComponent, PropsComponent } from '@components/index';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [HeadingComponent, PropsComponent],
  templateUrl: './button.component.html',
  styles: ``
})
export class ButtonComponent {
  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link'`,
        default: 'primary',
      },
      {
        property: 'type',
        type: `'button' | 'submit' | 'reset'`,
        default: 'button',
      },
      {
        property: 'size',
        type: `'default' | 'sm' | 'lg' | 'icon'`,
        default: 'default',
      },
      {
        property: 'disabled',
        type: 'boolean',
        default: 'false',
      },
    ],
  };
}
