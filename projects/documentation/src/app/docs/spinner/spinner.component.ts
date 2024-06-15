import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
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
        default: `sm`,
      },
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: `default`,
      },
    ],
  };

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
