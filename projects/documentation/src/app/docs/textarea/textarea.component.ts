import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
} from '@components/index';
import { HtmlTextareaDirective } from '../../../../../ngx-angular-ui/src/lib/textarea/textarea.directive';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { CodeExamples, LinksContent } from '../../models';
import { TextareaService } from '../../services/code-example';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    LinksContentComponent,
    HtmlTextareaDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    TabsComponent,
  ],
  templateUrl: './textarea.component.html',
  styles: ``,
})
export class TextareaComponent {
  public activeTabs: { [key: string]: string } = {};

  public linksContent: LinksContent[] = [
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
    { title: 'With Label', link: '#with-label', isSubmenu: true },
    { title: 'With Button', link: '#with-button', isSubmenu: true },
    { title: 'Disabled', link: '#disabled', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _textareaService: TextareaService) {
    this.examples = this._textareaService.getExamples();
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
