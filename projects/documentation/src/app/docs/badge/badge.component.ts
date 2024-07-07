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
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { HtmlBadgeDirective } from '../../../../../ngx-angular-ui/src/lib/badge/badge.directive';
import { BadgeService } from '../../services/code-example/badge.service';
import { CodeExamples, LinksContent } from '../../models';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    PropsComponent,
    NavButtonsComponent,
    HtmlButtonDirective,
    HtmlBadgeDirective,
    LinksContentComponent,
    HighlightCodeComponent,
    TabsComponent,
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
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: 'default',
      },
      {
        property: 'position',
        type: `'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'`,
        default: 'top-right',
      },
      {
        property: 'alert',
        type: 'boolean',
        default: 'false',
      },
      {
        property: 'border',
        type: 'boolean',
        default: 'false',
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
    { title: 'Solid colors', link: '#solid-colors', isSubmenu: true },
    { title: 'Outline colors', link: '#outline-colors', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
    { title: 'Rounded', link: '#rounded', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _badgeService: BadgeService) {
    this.examples = this._badgeService.getExamples();
    this.initializeTabs(12);
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
