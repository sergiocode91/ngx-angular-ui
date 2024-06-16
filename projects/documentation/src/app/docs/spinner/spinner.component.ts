import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlSpinnerComponent } from '../../../../../ngx-angular-ui/src/lib/spinner/spinner.component';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    HtmlSpinnerComponent,
    HtmlButtonDirective,
    TabsComponent,
    LucideAngularModule,
    PropsComponent,
    TabsComponent
  ],
  templateUrl: './spinner.component.html',
  styles: ``,
})
export class SpinnerComponent {
  public activeTabs: { [key: string]: string } = {};
  public props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'size',
        type: `'xs' | 'sm' | 'lg' | 'xl'`,
        default: `lg`,
      },
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: `default`,
      },
    ],
  };

  public codeUseTs = `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
  })
  `;

  public codeUseHtml = `
  <div uiSpinner></div>
  `;

  public code1 = `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
    template: \`
      <div uiSpinner></div>
    \`
  })
  `;

  public code2 = `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
    template: \`
      <div uiSpinner size="xs"></div>
      <div uiSpinner size="sm"></div>
      <div uiSpinner size="lg"></div>
      <div uiSpinner size="xl"></div>
    \`
  })
  `;

  public code3 = `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
    template: \`
      <div uiSpinner color="default"></div>
      <div uiSpinner color="primary"></div>
      <div uiSpinner color="secondary"></div>
      <div uiSpinner color="success"></div>
      <div uiSpinner color="warning"></div>
      <div uiSpinner color="danger"></div>
    \`
  })
  `;

  public code4 = `
  import { 
    HtmlSpinnerComponent,
    HtmlButtonDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlSpinnerComponent, 
      HtmlButtonDirective
    ],
    template: \`
      <button uiButton variant="secondary" disabled>
        <div uiSpinner size="sm" class="mr-3"></div>
        Loading
      </button>
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
