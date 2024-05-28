import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LucideAngularModule, HtmlButtonDirective],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
