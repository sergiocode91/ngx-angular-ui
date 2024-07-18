import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  NavButtonsComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from 'ngx-angular-ui';
import { ButtonService } from '../../services/code-example';
import { CodeExamples, LinksContent, Props } from '../../models';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    PropsComponent,
    HighlightCodeComponent,
    LucideAngularModule,
    TabsComponent,
    LinksContentComponent,
    NavButtonsComponent,
    HtmlButtonDirective,
  ],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'primary' | 'outline' | 'ghost' | 'link' | 'icon`,
        default: 'primary',
      },
      {
        property: 'color',
        type: `'info' | 'help' | 'success' | 'warning' | 'danger'`,
        default: 'none',
      },
      {
        property: 'size',
        type: `'sm' | 'md' | 'lg' | 'icon'`,
        default: 'md',
      },
      {
        property: 'rounded',
        type: `'full' | 'md'`,
        default: 'md',
      },
      {
        property: 'disabled',
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
    { title: 'Ghost', link: '#ghost', isSubmenu: true },
    { title: 'Link', link: '#link', isSubmenu: true },
    { title: 'Icon', link: '#icon', isSubmenu: true },
    { title: 'Icon with text', link: '#icon-with-text', isSubmenu: true },
    { title: 'Disabled', link: '#disabled', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _buttonService: ButtonService) {
    this.examples = this._buttonService.getExamples();
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
