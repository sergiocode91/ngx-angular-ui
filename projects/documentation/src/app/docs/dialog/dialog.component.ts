import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Dialog,
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

    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    Dialog,
  ],
  templateUrl: './dialog.component.html',
  styles: ``,
})
export class DialogComponent {
  @ViewChild('dialogRef') dialogRef!: Dialog;
  @ViewChildren('dialogRef') dialogRefs!: QueryList<Dialog>;

  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'size',
        type: `'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'`,
        default: 'md',
      },
      {
        property: 'dialogId',
        type: 'string',
        default: 'none',
      },
      {
        property: 'uiDialogClose',
        type: 'boolean | EventEmitter<void>',
        default: 'false',
      }
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
    { size: 'xs', buttonLabel: 'Extra small' },
    { size: 'sm', buttonLabel: 'Small' },
    { size: 'md', buttonLabel: 'Medium' },
    { size: 'lg', buttonLabel: 'Large' },
    { size: 'xl', buttonLabel: 'Very Large' },
    { size: '2xl', buttonLabel: 'Extra Large' },
    { size: '3xl', buttonLabel: 'Huge' },
    { size: '4xl', buttonLabel: 'Masive' },
    { size: '5xl', buttonLabel: 'Gigantic' },
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

  openDialog(index: number) {
    const dialog = this.dialogRefs.toArray()[index];
    if (dialog) {
      dialog.open();
    }
  }

  closeDialog(index: number) {
    const dialog = this.dialogRefs.toArray()[index];
    if (dialog) {
      dialog.close();
    }
  }
}
