import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
  ],
  templateUrl: './breadcrumb.component.html',
  styles: ``,
})
export class BreadcrumbComponent {
  public activeTabs: { [key: string]: string } = {};

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
