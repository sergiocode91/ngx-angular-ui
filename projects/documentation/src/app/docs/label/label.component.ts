import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    HtmlLabelDirective,
    HtmlInputDirective,
    TabsComponent,
  ],
  templateUrl: './label.component.html',
  styles: ``,
})
export class LabelComponent {
  public activeTabs: { [key: string]: string } = {};

  public codeUseTs = `
  import { HtmlLabelDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlLabelDirective],
  })
  `;

  public codeUseHtml = `
  <label uiLabel>Username</label>
  `;

  public code = `
  import { HtmlLabelDirective, HtmlInputDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlLabelDirective, HtmlInputDirective],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="Username">Username</label>
        <input uiInput type="text" id="Username" placeholder="Write your username">
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
