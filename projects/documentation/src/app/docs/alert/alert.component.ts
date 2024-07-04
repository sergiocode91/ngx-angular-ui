import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { HtmlAlertDirective } from '../../../../../ngx-angular-ui/src/lib/alert/alert.directive';
import { HtmlAlertTitleDirective } from '../../../../../ngx-angular-ui/src/lib/alert/alert-title.directive';
import { HtmlAlertDescriptionDirective } from '../../../../../ngx-angular-ui/src/lib/alert/alert-description.directive';
import { AlertService } from '../../services/code-example';
import { CodeExamples, LinksContent, Props } from '../../models';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    HtmlAlertDirective,
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective,
    HtmlButtonDirective,
    TabsComponent,
    LucideAngularModule,
    PropsComponent,
    LinksContentComponent,
    TabsComponent
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
        type: `'primary' | 'success' | 'destructive' | 'warning' | 'info'`,
        default: 'primary',
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
    { title: 'Colors', link: '#colors', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _alertService: AlertService) {
    this.examples = this._alertService.getExamples();
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
