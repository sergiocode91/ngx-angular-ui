import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  LinksContentComponent,
  NavButtonsComponent,
  PropsComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import { ButtonElement, BadgeElement } from 'ngx-angular-ui';
import { BadgeCodeService } from '../../services/code-example/badge-code.service';
import { CodeExamples, LinksContent } from '../../models';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    RouterModule,
    LucideAngularModule,
    HeadingComponent,
    PropsComponent,
    NavButtonsComponent,
    LinksContentComponent,
    HighlightCodeComponent,
    TabsComponent,
    ButtonElement,
    BadgeElement,
  ],
  templateUrl: './badge.component.html',
  styles: ``,
})
export class BadgeComponent {
  public activeTabs: { [key: string]: string } = {};

  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'primary' | 'secondary' | 'outline'`,
        default: 'primary',
      },
      {
        property: 'color',
        type: `'info' | 'help' | 'success' | 'warning' | 'danger'`,
        default: 'none',
      },
      {
        property: 'size',
        type: `'sm' | 'md' | 'lg'`,
        default: 'sm',
      },
      {
        property: 'rounded',
        type: `'md' | 'lg' | 'full'`,
        default: 'md',
      },
    ],
  };

  public linksContent: LinksContent[] = [
    { title: 'Props', link: '#props' },
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Primary', link: '#primary', isSubmenu: true },
    { title: 'Secondary', link: '#secondary', isSubmenu: true },
    { title: 'Outline', link: '#outline', isSubmenu: true },
    { title: 'Outline colors', link: '#outline-colors', isSubmenu: true },
    { title: 'Solid colors', link: '#solid-colors', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
    { title: 'Rounded', link: '#rounded', isSubmenu: true },
    { title: 'With Icon', link: '#with-icon', isSubmenu: true },
    { title: 'With Button', link: '#with-button', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _badgeCodeService: BadgeCodeService) {
    this.examples = this._badgeCodeService.getExamples();
    this.initializeTabs(10);
  }

  initializeTabs(numberOfTabs: number) {
    for (let i = 1; i <= numberOfTabs; i++) {
      this.activeTabs[`tab${i}`] = 'Preview';
    }
  }

  changeTab(tabId: string, newActiveTab: string) {
    this.activeTabs[tabId] = newActiveTab;
  }
}
