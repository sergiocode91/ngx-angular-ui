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
import { ButtonElement, ProgressElement } from '../../../../../ngx-angular-ui/src/public-api';
import { CodeExamples, LinksContent, Props } from '../../models';
import { ProgressCodeService } from '../../services/code-example';

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
    ProgressElement,
    ButtonElement
  ],
  templateUrl: './progress.component.html',
  styles: ``,
})
export class ProgressComponent {
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
        type: `'xs' | 'sm' | 'md' | 'lg'`,
        default: 'sm',
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
  ];

  public examples: CodeExamples;
  public currentProgress: number = 0;

  constructor(private _progressCodeService: ProgressCodeService) {
    this.examples = this._progressCodeService.getExamples();
    this.initializeTabs(3);
  }

  ngOnInit() {
    setTimeout(() => {
      this.currentProgress = 65;
    }, 1500);
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
