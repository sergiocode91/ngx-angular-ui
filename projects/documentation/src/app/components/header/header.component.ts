import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from 'ngx-angular-ui';
import { DarkmodeService } from '../../services/darkmode.service';

type Navigation = {
  title: string;
  links: Array<{ title: string; routerLink: string; isSoon: boolean }>;
};
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    HtmlButtonDirective,
    RouterModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styles: ``,
})

export class HeaderComponent {
  public _darkModeService: DarkmodeService = inject(DarkmodeService);
  public menuOpen: boolean = false;
  public iconMenu: string = 'Menu';
  public navigations = [
    {
      title: 'Getting Started',
      links: [
        { title: 'Introduction', routerLink: '/docs/introduction', isSoon: false, },
        { title: 'Installation', routerLink: '/docs/installation', isSoon: false, },
      ],
    },
    {
      title: 'Components',
      links: [
        { title: 'Alert', routerLink: '/docs/alert', isSoon: false },
        { title: 'Avatar', routerLink: '/docs/avatar', isSoon: false },
        { title: 'Badge', routerLink: '/docs/badge', isSoon: false },
        { title: 'Breadcrumb', routerLink: '/docs/breadcrumb', isSoon: true },
        { title: 'Button', routerLink: '/docs/button', isSoon: false },
        { title: 'Card', routerLink: '/docs/card', isSoon: false },
        { title: 'Input', routerLink: '/docs/input', isSoon: false },
        { title: 'Label', routerLink: '/docs/label', isSoon: false },
        { title: 'Skeleton', routerLink: '/docs/skeleton', isSoon: false },
        { title: 'Spinner', routerLink: '/docs/spinner', isSoon: false },
        { title: 'Switch', routerLink: '/docs/switch', isSoon: true },
        { title: 'Textarea', routerLink: '/docs/textarea', isSoon: false },
        { title: 'Tooltip', routerLink: '/docs/tooltip', isSoon: true },
      ],
    },
  ];
  public searchOpen: boolean = false;
  public query: string = '';
  public filteredItems: Array<Navigation> = [];
  public searchSubject: Subject<string> = new Subject();

  ngOnInit() {
    this.searchSubject.pipe(debounceTime(100)).subscribe(query => {
      if (query) {
        this.filteredItems = this.navigations.map(section => {
          const filteredLinks = section.links.filter(link =>
            link.title.toLowerCase().includes(query.toLowerCase())
          );
          return { ...section, links: filteredLinks };
        }).filter(section => section.links.length > 0);
      } else {
        this.filteredItems = this.navigations;
      }
    });
  
    this.filteredItems = this.navigations;
  }

  toggleDarkmode() {
    this._darkModeService.toggleDarkmode();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.iconMenu = this.menuOpen ? 'X' : 'Menu';
  }

  toggleSearch() {
    this.searchOpen = !this.searchOpen;

    if (this.searchOpen) {
      this.query = '';
      this.searchSubject.next('');
    }
  }

  onBackgroundClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.searchOpen = false;
    }
  }

  onSearch() {
    this.searchSubject.next(this.query);
  }

  deleteQuery() {
    this.query = '';
    this.searchSubject.next('');
  }
}
