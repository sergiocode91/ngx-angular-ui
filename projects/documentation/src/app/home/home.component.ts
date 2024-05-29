import { Component } from '@angular/core';
import { HtmlButtonDirective } from '../../../../ngx-angular-ui/src/public-api';
import { HeroComponent } from '@components/index';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HtmlButtonDirective,HeroComponent],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
