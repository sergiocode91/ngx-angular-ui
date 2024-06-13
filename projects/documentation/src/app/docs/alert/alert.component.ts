import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
  ],
  templateUrl: './alert.component.html',
  styles: ``,
})
export class AlertComponent {
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
