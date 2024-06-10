import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    HeadingComponent,
    HtmlInputDirective,
    HtmlLabelDirective,
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

  public code2 = `
  import { HtmlInputDirective, HtmlLabelDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective, HtmlLabelDirective],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="email">Email</label>
        <input uiInput type="email" id="email" placeholder="Enter your email">
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
