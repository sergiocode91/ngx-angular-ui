import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlCardContentDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-content.directive';
import { HtmlCardDescriptionDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-description.directive';
import { HtmlCardFooterDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-footer.directive';
import { HtmlCardHeaderDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-header.directive';
import { HtmlCardTitleDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-title.directive';
import { HtmlCardDirective } from '../../../../../ngx-angular-ui/src/lib/card/card.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    HeadingComponent,
    HtmlButtonDirective,
    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective,
    HighlightCodeComponent,
    TabsComponent
  ],
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {
  public activeTabs: { [key: string]: string } = {};

  public codeUseTs = `
  import { 
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      HtmlCardDirective,
      HtmlCardHeaderDirective,
      HtmlCardTitleDirective,
      HtmlCardDescriptionDirective,
      HtmlCardContentDirective,
      HtmlCardFooterDirective,
    ],
  })
  `;

  public codeUseHtml = `
  <div uiCard>
    <div uiCardHeader>
      <div uiCardTitle>Card Title</div>
      <div uiCardDescription>Card Description</div>
    </div>
    <div uiCardContent>Card Content</div>
    <div uiCardFooter>Card Footer</div>
  </div>
  `;

  public code1 = `
  import { 
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlCardDirective,
      HtmlCardHeaderDirective,
      HtmlCardTitleDirective,
      HtmlCardDescriptionDirective,
      HtmlCardContentDirective,
      HtmlCardFooterDirective,
    ],
    template: \`
      <div uiCard class="w-[550px]">
        <div uiCardHeader>
          <div uiCardTitle>Reset your password</div>
          <div uiCardDescription>Enter your verified email to receive a password reset link.</div>
        </div>
        <div uiCardContent>
          <input uiInput type="email" placeholder="Enter your email address">
        </div>
        <div uiCardFooter class="flex justify-between">
          <button uiButton variant="outline">Cancel</button>
          <button uiButton>Reset password</button>
        </div>
      </div>
    \`
  })
  `;

  public code2 = `
  import { 
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlCardDirective,
      HtmlCardHeaderDirective,
      HtmlCardTitleDirective,
      HtmlCardDescriptionDirective,
      HtmlCardContentDirective,
      HtmlCardFooterDirective,
    ],
    template: \`
      <div uiCard class="w-[350px]">
        <div uiCardHeader>
          <div uiCardTitle>Sign in</div>
          <div uiCardDescription>Enter your account details.</div>
        </div>
        <div uiCardContent class="grid items-center gap-4">
          <div class="flex flex-col space-y-2">
            <label uiLabel for="email">Email address</label>
            <input uiInput type="email" id="email" placeholder="Enter your email address">
          </div>
          <div class="flex flex-col space-y-2">
            <label uiLabel for="password">Password</label>
            <input uiInput type="password" id="password" placeholder="Enter your password">
          </div>
        </div>
        <div uiCardFooter>
          <button uiButton class="w-full">Sign in</button>
        </div>
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
