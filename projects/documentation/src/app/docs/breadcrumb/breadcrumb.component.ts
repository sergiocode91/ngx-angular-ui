import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    HtmlButtonDirective,
    TabsComponent,
    LucideAngularModule
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
