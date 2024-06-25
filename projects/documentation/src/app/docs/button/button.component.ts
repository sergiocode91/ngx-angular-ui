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

  public activeIndex: number = 0;
  public colors: { value: string, name: string }[] = [
    { value: '#52525b', name: 'default' },
    { value: '#3b82f6', name: 'primary' },
    { value: '#22c55e', name: 'success' },
    { value: '#6d28d9', name: 'secondary' },
    { value: '#ea580c', name: 'warning' },
    { value: '#dc2626', name: 'danger' }
  ];
  public activeColor: { value: string, name: string } = this.colors[0];

  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'variant',
        type: `'default' | 'outline' | 'ghost' | 'link' | 'icon`,
        default: 'default',
      },
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: 'default',
      },
      {
        property: 'size',
        type: `'sm' | 'md' | 'lg'`,
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
      <button uiButton variant="destructive">Destructive</button>
    \`
  })
  `;

  public code5 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="ghost">Get started</button>
    \`
  })
  `;

  public code6 = `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="link">Don’t have an account?</button>
    \`
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
      </button>
    \`
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
      </button>
    \`
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
      </button>
    \`
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

  setActive(index: number) {
    this.activeIndex = index;
    this.activeColor = this.colors[index];
  }
}
