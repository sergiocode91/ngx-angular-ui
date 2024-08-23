import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  PropsComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import {
  AlertElement,
  AlertTitleElement,
  AlertDescriptionElement,
  ButtonElement,
} from 'ngx-angular-ui';
import { AlertCodeService } from '../../services/code-example';
import { CodeExamples, LinksContent, Props } from '../../models';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
    LucideAngularModule,
    PropsComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,
    AlertElement,
    AlertTitleElement,
    AlertDescriptionElement,
    ButtonElement,
  ],
  templateUrl: './alert.component.html',
  styles: ``,
})
export class AlertComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'primary' | 'outline' | 'primary-inline' | 'outline-inline'`,
        default: 'outline',
      },
      { 
        property: 'color', 
        type: `'default' | 'info' | 'help' | 'success' | 'warning' | 'danger'`, 
        default: 'default'
      },
      {
        property: 'showIcon',
        type: 'boolean',
        default: 'false',
      },
    ],
  };
  public linksContent: LinksContent[] = [
    { title: 'Props', link: '#props' },
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
    { title: 'With Icon', link: '#with-icon', isSubmenu: true },
    { title: 'Inline Option', link: '#inline-option', isSubmenu: true },
    { title: 'Outline Colors', link: '#outline-colors', isSubmenu: true },
    { title: 'Solid Colors', link: '#solid-colors', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _alertCodeService: AlertCodeService) {
    this.examples = this._alertCodeService.getExamples();
    this.initializeTabs(4);
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
