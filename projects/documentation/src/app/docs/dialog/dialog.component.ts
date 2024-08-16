import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  LinksContentComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import {
  HtmlInputDirective,
  HtmlLabelDirective,
  HtmlButtonDirective,
  HtmlAlertDirective,
  HtmlAlertTitleDirective,
  HtmlAlertDescriptionDirective,
  HtmlDialogCloseDirective,
  HtmlDialogContentDirective,
  HtmlDialogDescriptionDirective,
  HtmlDialogFooterDirective,
  HtmlDialogHeaderDirective,
  HtmlDialogTitleDirective,
  HtmlDialogTriggerDirective,
  HtmlDialogDirective,
} from '../../../../../ngx-angular-ui/src/public-api';
import { CodeExamples, LinksContent, Props } from '../../models';
import { DialogService } from '../../services/code-example';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    HeadingComponent,
    HighlightCodeComponent,
    PropsComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,
    LucideAngularModule,

    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    HtmlAlertDirective,
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective,

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
  styles: ``,
})
export class DialogComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'size',
        type: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'`,
        default: 'md',
      },
    ],
  };
  public linksContent: LinksContent[] = [
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Simple', link: '#simple', isSubmenu: true },
    { title: 'With Form', link: '#with-form', isSubmenu: true },
    { title: 'With Delete Project', link: '#with-delete-project', isSubmenu: true },
    { title: 'With Content', link: '#with-content', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
  ];
  public dialogConfigs = [
    { id: 'dialog5', size: 'xs', buttonLabel: 'Extra small' },
    { id: 'dialog6', size: 'sm', buttonLabel: 'Small' },
    { id: 'dialog7', size: 'md', buttonLabel: 'Medium' },
    { id: 'dialog8', size: 'lg', buttonLabel: 'Large' },
    { id: 'dialog9', size: 'xl', buttonLabel: 'Very Large' },
    { id: 'dialog10', size: '2xl', buttonLabel: 'Extra Large' },
    { id: 'dialog11', size: '3xl', buttonLabel: 'Huge' },
    { id: 'dialog12', size: '4xl', buttonLabel: 'Masive' },
    { id: 'dialog13', size: '5xl', buttonLabel: 'Gigantic' },
  ] as const;

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
