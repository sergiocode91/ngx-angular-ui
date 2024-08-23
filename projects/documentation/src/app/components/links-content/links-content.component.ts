import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonElement } from 'ngx-angular-ui';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-links-content',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    ButtonElement,
    RouterModule
  ],
  templateUrl: './links-content.component.html',
  styles: ``
})
export class LinksContentComponent {
  @Input() linksContent: { title: string, link: string, isSubmenu?: boolean }[] = [];

  public currentRoute: string = '';
  public selectedLinkIndex: number | null = null;

  constructor(private _router: Router) {}

  ngOnInit() {
    this.currentRoute = this._router.url.split('#')[0];
  }

  getFullLink(link: string): string {
    return `${this.currentRoute}${link}`;
  }

  onLinkClick(event: Event, index: number, link: string) {
    event.preventDefault();
    this.selectedLinkIndex = index;
    this.scrollToSection(link);
  }

  scrollToSection(link: string) {
    const element = document.querySelector(link);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
