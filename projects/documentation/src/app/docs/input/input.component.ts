import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    HeadingComponent,
    HtmlInputDirective,
    HighlightCodeComponent,
    TabsComponent,
  ],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  public activeTabs: { [key: string]: string } = {};

  public codeUseTs = `
  import { HtmlInputDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlInputDirective],
  })
  `;

  public codeUseHtml = `
  <input uiInput type="email" placeholder="Email">
  `;

  public code1 = `
  import { HtmlInputDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective],
    template: \`
      <input uiInput type="email" placeholder="Enter your email">
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
