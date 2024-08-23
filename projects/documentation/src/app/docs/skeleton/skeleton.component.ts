import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import { SkeletonElement, ButtonElement } from 'ngx-angular-ui';
import { CodeExamples, LinksContent } from '../../models';
import { SkeletonService } from '../../services/code-example';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
    LinksContentComponent,
    NavButtonsComponent,
    SkeletonElement,
    ButtonElement,
  ],
  templateUrl: './skeleton.component.html',
  styles: ``,
})
export class SkeletonComponent {
  public activeTabs: { [key: string]: string } = {};

  public linksContent: LinksContent[] = [
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'With Avatar', link: '#with-avatar', isSubmenu: true },
    { title: 'With Card', link: '#with-card', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _skeletonService: SkeletonService) {
    this.examples = this._skeletonService.getExamples();
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
