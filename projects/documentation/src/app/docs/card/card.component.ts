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
  CardElement,
  CardHeaderElement,
  CardTitleElement,
  CardDescriptionElement,
  CardContentElement,
  CardFooterElement,
  ButtonElement,
  InputElement,
  LabelElement,
} from 'ngx-angular-ui';
import { CodeExamples, LinksContent } from '../../models';
import { CardService } from '../../services/code-example';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,
    CardElement,
    CardHeaderElement,
    CardTitleElement,
    CardDescriptionElement,
    CardContentElement,
    CardFooterElement,
    ButtonElement,
    InputElement,
    LabelElement,
  ],
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {
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

  constructor(private _cardService: CardService) {
    this.examples = this._cardService.getExamples();
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
