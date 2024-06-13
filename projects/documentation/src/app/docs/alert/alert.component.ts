import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
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
    LucideAngularModule
  ],
  templateUrl: './alert.component.html',
  styles: ``,
})
export class AlertComponent {
  public activeTabs: { [key: string]: string } = {};

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
  <div uiAlert>
    <div uiAlertTitle>Hello there!</div>
    <div uiAlertDescription>Keep your app updated.</div>
  </div>
  `;

  public code = `
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
      <div uiAlert>
        <div uiAlertTitle>Hello there!</div>
        <div uiAlertDescription>Regular updates keep your app running smoothly.</div>
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
