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
  ButtonElement,
  LabelElement,
  InputElement,
} from 'ngx-angular-ui';
import { CodeExamples, LinksContent } from '../../models';
import { InputCodeService } from '../../services/code-example';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,
    InputElement,
    LabelElement,
    ButtonElement,
  ],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
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

  constructor(private _inputCodeService: InputCodeService) {
    this.examples = this._inputCodeService.getExamples();
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
