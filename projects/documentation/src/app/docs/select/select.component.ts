import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  PropsComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import { SwitchElement, ButtonElement } from 'ngx-angular-ui';
import { CodeExamples, LinksContent, Props } from '../../models';
import { SelectCodeService } from '../../services/code-example';
import { SelectElement, SelectValueElement, SelectContentElement, SelectItemElement, SelectTriggerElement } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
    LinksContentComponent,
    PropsComponent,
    NavButtonsComponent,
    SelectElement,
    SelectTriggerElement,
    SelectItemElement,
    SelectContentElement,
    SelectValueElement,
    ButtonElement,
  ],
  templateUrl: './select.component.html',
  styles: ``,
})
export class SelectComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'placeholder',
        type: 'string',
        default: 'Select an option',
      },
      {
        property: 'multiple',
        type: 'boolean',
        default: 'false',
      },
      {
        property: 'disabled',
        type: 'boolean',
        default: 'false',
      },
    ],
  };
  public linksContent: LinksContent[] = [
    { title: 'Props', link: '#props' },
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
    { title: 'Multiple', link: '#multiple', isSubmenu: true },
    { title: 'Custom', link: '#custom', isSubmenu: true },
    { title: 'Disabled', link: '#disabled', isSubmenu: true },
  ];

  public examples: CodeExamples;
  public switchState: boolean = false;

  constructor(private _selectCodeService: SelectCodeService) {
    this.examples = this._selectCodeService.getExamples();
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

  onSwitchToggle(state: boolean) {
    this.switchState = state;
  }
}
