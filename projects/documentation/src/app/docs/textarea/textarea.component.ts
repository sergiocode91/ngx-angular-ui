import { Component } from '@angular/core';
import { HeadingComponent, HighlightCodeComponent, TabsComponent } from '@components/index';
import { HtmlTextareaDirective } from '../../../../../ngx-angular-ui/src/lib/textarea/textarea.directive';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    HtmlTextareaDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    TabsComponent,
  ],
  templateUrl: './textarea.component.html',
  styles: ``
})
export class TextareaComponent {
  public activeTabs: { [key: string]: string } = {};

  public codeUseTs = `
  import { HtmlTextareaDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective],
  })
  `;

  public codeUseHtml = `
  <textarea uiTextarea placeholder="Type your message here."></textarea>
  `;

  public code1 = `
  import { HtmlTextareaDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective],
    template: \`
      <textarea uiTextarea placeholder="Type your message here."></textarea>
    \`
  })
  `;

  public code2 = `
  import { HtmlTextareaDirective, HtmlLabelDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective, HtmlLabelDirective],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="email">Message</label>
        <textarea uiTextarea placeholder="Type your message here."></textarea>
      </div>
    \`
  })
  `;

  public code3 = `
  import { HtmlInputDirective, HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective, HtmlButtonDirective],
    template: \`
      <div class="flex flex-col items-end space-y-4">
        <textarea uiTextarea placeholder="Type your message here."></textarea>
        <button uiButton>Send</button>
      </div>
    \`
  })
  `;

  public code4 = `
  import { HtmlTextareaDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective],
    template: \`
      <textarea uiTextarea placeholder="Type your message here." disabled></textarea>
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
