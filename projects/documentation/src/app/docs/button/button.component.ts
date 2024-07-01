import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    CommonModule,
    HeadingComponent,
    PropsComponent,
    HighlightCodeComponent,
    LucideAngularModule,
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
        type: `'primary' | 'outline' | 'ghost' | 'link' | 'icon`,
        default: 'primary',
      },
      {
        property: 'color',
        type: `'info' | 'help' | 'success' | 'warning' | 'danger'`,
        default: 'none',
      },
      {
        property: 'size',
        type: `'sm' | 'md' | 'lg' | 'icon'`,
        default: 'md',
      },
      {
        property: 'rounded',
        type: `'full' | 'md'`,
        default: 'md',
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
    template: \`
      <button uiButton variant="primary">Button</button>
    \`
  })
  `;

  public code2 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="secondary">Button</button>
    \`
  })
  `;

  public code3 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline">Outline</button>
    \`
  })
  `;

  public code4 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary" color="info">Info</button>
      <button uiButton variant="primary" color="help">Help</button>
      <button uiButton variant="primary" color="success">Success</button>
      <button uiButton variant="primary" color="warning">Warning</button>
      <button uiButton variant="primary" color="danger">Danger</button>
    \`
  })
  `;

  public code5 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline" color="info">Info</button>
      <button uiButton variant="outline" color="help">Help</button>
      <button uiButton variant="outline" color="success">Success</button>
      <button uiButton variant="outline" color="warning">Warning</button>
      <button uiButton variant="outline" color="danger">Danger</button>
    \`
  })
  `;

  public code6 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary" size="sm">Small</button>
      <button uiButton variant="primary" size="md">Medium</button>
      <button uiButton variant="primary" size="lg">Large</button>
    \`
  })
  `;

  public code7 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary" rounded="full">Button</button>
      <button uiButton variant="primary" rounded="md">Button</button>
    \`
  })
  `;

  public code8 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="ghost">Get started</button>
    \`
  })
  `;

  public code9 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="link">Don’t have an account?</button>
    \`
  })
  `;

  public code10 = `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline" size="icon">
        <lucide-icon name="Moon" [size]="18"></lucide-icon>
      </button>
    \`
  })
  `;

  public code11 = `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary">
        <lucide-icon name="Instagram" [size]="18" class="inline-flex mr-1"></lucide-icon>
        Sign in with Instagram
      </button>
    \`
  })
  `;

  public code12 = `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary" color="danger" disabled="true">
        <lucide-icon name="Trash" [size]="18" class="inline-flex mr-1"></lucide-icon>
        Delete account
      </button>
    \`
  })
  `;

  constructor() {
    this.initializeTabs(12);
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
