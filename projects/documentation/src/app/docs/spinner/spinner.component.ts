import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  PropsComponent,
  TabsComponent,
  NavButtonsComponent,
} from '@components/index';
import { SpinnerElement, ButtonElement } from 'ngx-angular-ui';
import { SpinnerCodeService } from '../../services/code-example';
import { CodeExamples, LinksContent, Props } from '../../models';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    HighlightCodeComponent,
    TabsComponent,
    LucideAngularModule,
    PropsComponent,
    TabsComponent,
    LinksContentComponent,
    NavButtonsComponent,
    SpinnerElement,
    ButtonElement,
  ],
  templateUrl: './spinner.component.html',
  styles: ``,
})
export class SpinnerComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'size',
        type: `'xs' | 'sm' | 'lg' | 'xl'`,
        default: `lg`,
      },
      {
        property: 'color',
        type: `'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'`,
        default: `default`,
      },
    ],
  };

  public linksContent: LinksContent[] = [
    { title: 'Props', link: '#props' },
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
    { title: 'Colors', link: '#colors', isSubmenu: true },
    { title: 'With Label', link: '#with-label', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _spinnerCodeService: SpinnerCodeService) {
    this.examples = this._spinnerCodeService.getExamples();
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
