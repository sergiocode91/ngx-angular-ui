import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective, HtmlBadgeDirective } from 'ngx-angular-ui';
@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    HtmlButtonDirective,
    HtmlBadgeDirective,
  ],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
