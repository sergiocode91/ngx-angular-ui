import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { DarkmodeService } from '../../services/darkmode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, HtmlButtonDirective, RouterModule],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {
  public _darkModeService: DarkmodeService = inject(DarkmodeService);
  public menuOpen: boolean = false;
  public navigations = [
    {
      title: 'Getting Started',
      links: [
        { title: 'Introduction', routerLink: '/docs/introduction', isSoon: false },
        { title: 'Installation', routerLink: '/docs/installation', isSoon: false },
      ],
    },
    {
      title: 'Components',
      links: [
        { title: 'Alert', routerLink: '/docs/alert', isSoon: false },
        { title: 'Avatar', routerLink: '/docs/avatar', isSoon: false },
        { title: 'Badge', routerLink: '/docs/badge', isSoon: false },
        { title: 'Breadcrumb', routerLink: '/docs/breadcrumb', isSoon: false },
        { title: 'Button', routerLink: '/docs/button', isSoon: false },
        { title: 'Card', routerLink: '/docs/card', isSoon: false },
        { title: 'Input', routerLink: '/docs/input', isSoon: false },
        { title: 'Label', routerLink: '/docs/label', isSoon: false },
        { title: 'Skeleton', routerLink: '/docs/skeleton', isSoon: false },
        { title: 'Spinner', routerLink: '/docs/spinner', isSoon: false },
        { title: 'Textarea', routerLink: '/docs/textarea', isSoon: false },
      ],
    },
  ]

  toggleDarkmode() {
    this._darkModeService.toggleDarkmode();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
