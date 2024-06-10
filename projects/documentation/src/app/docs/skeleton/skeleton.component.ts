import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { HtmlSkeletonDirective } from '../../../../../ngx-angular-ui/src/lib/skeleton/skeleton.directive';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    HtmlSkeletonDirective,
    TabsComponent,
  ],
  templateUrl: './skeleton.component.html',
  styles: ``,
})
export class SkeletonComponent {
  public activeTabs: { [key: string]: string } = {};

  public codeUseTs = `
  import { HtmlSkeletonDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlSkeletonDirective],
  })
  `;

  public codeUseHtml = `
  <div uiSkeleton class="w-[250px] h-[125px] rounded-xl"></div>
  `;

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

  public code2 = `
  import { HtmlSkeletonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSkeletonDirective],
    template: \`
      <div class="flex flex-col space-y-3">
        <div uiSkeleton class="w-[250px] h-[125px] rounded-xl"></div>
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
