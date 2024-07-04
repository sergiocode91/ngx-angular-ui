import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  TabsComponent,
} from '@components/index';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { HtmlInputDirective } from '../../../../../ngx-angular-ui/src/lib/input/input.directive';
import { HtmlLabelDirective } from '../../../../../ngx-angular-ui/src/lib/label/label.directive';
import { HtmlCardContentDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-content.directive';
import { HtmlCardDescriptionDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-description.directive';
import { HtmlCardFooterDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-footer.directive';
import { HtmlCardHeaderDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-header.directive';
import { HtmlCardTitleDirective } from '../../../../../ngx-angular-ui/src/lib/card/card-title.directive';
import { HtmlCardDirective } from '../../../../../ngx-angular-ui/src/lib/card/card.directive';
import { CodeExamples, LinksContent } from '../../models';
import { CardService } from '../../services/code-example';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HtmlButtonDirective,
    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective,
    HighlightCodeComponent,
    LinksContentComponent,
    TabsComponent
  ],
  templateUrl: './card.component.html',
  styles: ``,
})
export class CardComponent {
  public activeTabs: { [key: string]: string } = {};

  public linksContent: LinksContent[] = [
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'With Reset password', link: '#with-reset-password', isSubmenu: true },
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
