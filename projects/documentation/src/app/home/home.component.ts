import { Component } from '@angular/core';
import { HtmlButtonDirective } from '../../../../ngx-angular-ui/src/public-api';
import { HeroComponent } from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlSkeletonDirective } from 'ngx-angular-ui';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HtmlButtonDirective,
    HeroComponent,
    LucideAngularModule,
    HtmlSkeletonDirective,
  ],
  templateUrl: './home.component.html',
  styles: ``,
})
export class HomeComponent {}
