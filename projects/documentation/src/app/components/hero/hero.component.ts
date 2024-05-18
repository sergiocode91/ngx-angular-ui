import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HtmlButtonDirective, LucideAngularModule],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {

}
