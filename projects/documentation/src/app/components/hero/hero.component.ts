import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from 'ngx-angular-ui';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HtmlButtonDirective, LucideAngularModule, RouterModule],
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {

}
