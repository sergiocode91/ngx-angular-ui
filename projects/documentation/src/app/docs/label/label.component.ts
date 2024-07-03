import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
} from '@components/index';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { CodeExamples, LinksContent } from '../../models';
import { LabelService } from '../../services/code-example';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    HtmlLabelDirective,
    HtmlInputDirective,
    HtmlButtonDirective,
    LinksContentComponent,
    TabsComponent,
  ],
  templateUrl: './label.component.html',
  styles: ``,
})
export class LabelComponent {
  public activeTabs: { [key: string]: string } = {};

  public linksContent: LinksContent[] = [
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _labelService: LabelService) {
    this.examples = this._labelService.getExamples();
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
