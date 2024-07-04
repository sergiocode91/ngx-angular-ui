import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { CodeExamples, LinksContent } from '../../models';
import { InputService } from '../../services/code-example';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    HighlightCodeComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,
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
    { title: 'Disabled', link: '#disabled', isSubmenu: true }
  ];

  public examples: CodeExamples;

  constructor(private _inputService: InputService) {
    this.examples = this._inputService.getExamples();
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
