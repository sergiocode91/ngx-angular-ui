import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import {
  HtmlInputDirective,
  HtmlLabelDirective,
  HtmlButtonDirective,

  HtmlDialogCloseDirective,
  HtmlDialogContentDirective,
  HtmlDialogDescriptionDirective,
  HtmlDialogFooterDirective,
  HtmlDialogHeaderDirective,
  HtmlDialogTitleDirective,
  HtmlDialogTriggerDirective,
  HtmlDialogDirective,
} from '../../../../../ngx-angular-ui/src/public-api';
import { CodeExamples, LinksContent } from '../../models';
import { DialogService } from '../../services/code-example';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,

    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    
    HtmlDialogCloseDirective,
    HtmlDialogContentDirective,
    HtmlDialogDescriptionDirective,
    HtmlDialogFooterDirective,
    HtmlDialogHeaderDirective,
    HtmlDialogTitleDirective,
    HtmlDialogTriggerDirective,
    HtmlDialogDirective,    
  ],
  templateUrl: './dialog.component.html',
  styles: ``
})
export class DialogComponent {
  public activeTabs: { [key: string]: string } = {};

  public linksContent: LinksContent[] = [
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    {
      title: 'With Reset password',
      link: '#with-reset-password',
      isSubmenu: true,
    },
    { title: 'With Sign in', link: '#with-sign-in', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _dialogService: DialogService) {
    this.examples = this._dialogService.getExamples();
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
