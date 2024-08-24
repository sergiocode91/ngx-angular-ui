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
import { SwitchCodeService } from '../../services/code-example';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
    LinksContentComponent,
    PropsComponent,
    NavButtonsComponent,
    SwitchElement,
    ButtonElement
  ],
  templateUrl: './switch.component.html',
  styles: ``,
})
export class SwitchComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'label',
        type: 'string',
        default: 'none',
      },
      {
        property: 'color',
        type: `'default' | 'info' | 'help' | 'success' | 'warning' | 'danger'`,
        default: 'default',
      },
      {
        property: 'size',
        type: `'sm' | 'md' | 'lg'`,
        default: 'sm',
      },
      {
        property: 'checked',
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
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
    { title: 'State Toggle', link: '#state-toggle', isSubmenu: true },
    { title: 'With Label', link: '#with-label', isSubmenu: true },
    { title: 'Colors', link: '#colors', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
    { title: 'Disabled', link: '#disabled', isSubmenu: true },
  ];

  public examples: CodeExamples;
  public switchState: boolean = false;

  constructor(private _switchCodeService: SwitchCodeService) {
    this.examples = this._switchCodeService.getExamples();
    this.initializeTabs(6);
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
