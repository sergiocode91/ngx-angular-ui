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
        type: `'sm' | 'lg' | 'xl'`,
        default: `lg`,
      },
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: `default`,
      },
    ],
  };

  public code1 = `
  import { HtmlSkeletonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSkeletonDirective],
    template: \`
      <div class="flex items-center space-x-4">
        <div uiSkeleton class="w-12 h-12 rounded-full"></div>
        <div class="flex flex-col space-y-2">
          <div uiSkeleton class="w-[250px] h-4 rounded-md"></div>
          <div uiSkeleton class="w-[200px] h-4 rounded-md"></div>
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
