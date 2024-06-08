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

  public code2 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`<button uiButton variant="secondary">Button</button>\`
  })
  `;

  public code3 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`<button uiButton variant="outline">Outline</button>\`
  })
  `;

  public code4 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`<button uiButton variant="destructive">Destructive</button>\`
  })
  `;

  public code5 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`<button uiButton variant="ghost">Get started</button>\`
  })
  `;

  public code6 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`<button uiButton variant="link">Don’t have an account?</button>\`
  })
  `;

  public code7 = `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
    <button uiButton variant="outline" size="icon">
      <lucide-icon name="Moon" [size]="18"></lucide-icon>
    </button>\`
  })
  `;

  public code8 = `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
    <button uiButton variant="primary">
      <lucide-icon name="Instagram" [size]="18" class="inline-flex mr-1"></lucide-icon>
      Sign in with Instagram
    </button>\`
  })
  `;

  public code9 = `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
    <button uiButton variant="destructive" disabled="true">
      <lucide-icon name="Trash" [size]="18" class="inline-flex mr-1"></lucide-icon>
      Delete account
    </button>\`
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
