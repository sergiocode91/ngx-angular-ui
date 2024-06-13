import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { LucideAngularModule } from 'lucide-angular';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { HtmlAlertDirective } from '../../../../../ngx-angular-ui/src/lib/alert/alert.directive';
import { HtmlAlertTitleDirective } from '../../../../../ngx-angular-ui/src/lib/alert/alert-title.directive';
import { HtmlAlertDescriptionDirective } from '../../../../../ngx-angular-ui/src/lib/alert/alert-description.directive';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    HtmlAlertDirective,
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective,
    HtmlButtonDirective,
    TabsComponent,
    LucideAngularModule,
    PropsComponent,
    TabsComponent
  ],
  templateUrl: './alert.component.html',
  styles: ``,
})
export class AlertComponent {
  public activeTabs: { [key: string]: string } = {};
  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'primary' | 'success' | 'destructive' | 'warning' | 'info'`,
        default: 'primary',
      },
      {
        property: 'icon',
        type: 'boolean',
        default: 'false',
      },
    ],
  };

  public codeUseTs = `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
  })
  `;

  public codeUseHtml = `
  <div uiAlert variant="primary">
    <div uiAlertTitle>Hello there!</div>
    <div uiAlertDescription>Keep your app updated.</div>
  </div>
  `;

  public code1 = `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
    template: \`
      <div uiAlert variant="primary">
        <div uiAlertTitle>Hello there!</div>
        <div uiAlertDescription>Regular updates keep your app running smoothly.</div>
      </div>
    \`
  })
  `;

  public code2 = `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
    template: \`
    <div uiAlert variant="success">
      <div uiAlertTitle>Success!</div>
      <div uiAlertDescription>Your changes have been saved successfully.</div>
    </div>
    <div uiAlert variant="destructive">
      <div uiAlertTitle>Error!</div>
      <div uiAlertDescription>Unexpected error. Please try again.</div>
    </div>
    <div uiAlert variant="warning">
      <div uiAlertTitle>Warning!</div>
      <div uiAlertDescription>Unsaved changes detected. Please save your work.</div>
    </div>
    <div uiAlert variant="info">
      <div uiAlertTitle>Info!</div>
      <div uiAlertDescription>Save your work regularly to avoid data loss.</div>
    </div>
    \`
  })
  `;

  constructor() {
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
