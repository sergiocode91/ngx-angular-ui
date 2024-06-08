import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    HeadingComponent,
    PropsComponent,
    HighlightCodeComponent,
    TabsComponent,
    HtmlButtonDirective
  ],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  public activeTabs: { [key: string]: string } = {};
  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link'`,
        default: 'primary',
      },
      {
        property: 'type',
        type: `'button' | 'submit' | 'reset'`,
        default: 'button',
      },
      {
        property: 'size',
        type: `'default' | 'sm' | 'lg' | 'icon'`,
        default: 'default',
      },
      {
        property: 'disabled',
        type: 'boolean',
        default: 'false',
      },
    ],
  };

  public codeUseTs = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
  })
  `;

  public codeUseHtml = `
  <button uiButton>Button</button>
  `;

  public code1 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`<button uiButton variant="primary">Button</button>\`
  })
  `;

  constructor() {
    this.initializeTabs(9);
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
