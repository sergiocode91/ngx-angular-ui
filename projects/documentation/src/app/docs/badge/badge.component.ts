import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeadingComponent, PropsComponent } from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent, 
    PropsComponent, 
    HtmlButtonDirective
  ],
  templateUrl: './badge.component.html',
  styles: ``,
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
