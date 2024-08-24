import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import { ButtonElement } from 'ngx-angular-ui';
import { CodeExamples, LinksContent } from '../../models';
import { SwitchCodeService } from '../../services/code-example';
import { SwitchElement } from '../../../../../ngx-angular-ui/src/public-api';

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
    SwitchElement,
    ButtonElement
  ],
  templateUrl: './switch.component.html',
  styles: ``,
})
export class SwitchComponent {
  public activeTabs: { [key: string]: string } = {};

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
