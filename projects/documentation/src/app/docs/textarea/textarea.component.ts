import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import {
  HtmlButtonDirective,
  HtmlTextareaDirective,
  HtmlLabelDirective,
} from 'ngx-angular-ui';
import { CodeExamples, LinksContent } from '../../models';
import { TextareaService } from '../../services/code-example';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    LinksContentComponent,
    HtmlTextareaDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    TabsComponent,
    NavButtonsComponent,
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
