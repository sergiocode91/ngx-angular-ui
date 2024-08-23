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
import { ButtonElement, AvatarElement } from 'ngx-angular-ui';
import { AvatarService } from '../../services/code-example';
import { CodeExamples, LinksContent, Props } from '../../models';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    RouterModule,
    HeadingComponent,
    PropsComponent,
    HighlightCodeComponent,
    LinksContentComponent,
    TabsComponent,
    NavButtonsComponent,
    AvatarElement,
    ButtonElement,
  ],
  templateUrl: './avatar.component.html',
  styles: ``,
})
export class AvatarComponent {
  public activeTabs: { [key: string]: string } = {};
  public props: Props = {
    header: ['Property', 'Type', 'Default'],
    columns: [
      {
        property: 'radius',
        type: `'full' | 'lg' | 'md' | 'sm'`,
        default: `full`,
      },
      {
        property: 'size',
        type: `'xs' | 'sm' | 'md' | 'lg' | 'xl'`,
        default: `lg`,
      },
      {
        property: 'color',
        type: `'primary' | 'info' | 'help' | 'success' | 'warning' | 'danger'`,
        default: `primary`,
      },
      {
        property: 'status',
        type: `'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'`,
        default: `top-right`,
      },
    ],
  };

  public linksContent: LinksContent[] = [
    { title: 'Props', link: '#props' },
    { title: 'Usage', link: '#usage' },
    { title: 'Examples', link: '#examples' },
    { title: 'Default', link: '#default', isSubmenu: true },
    { title: 'With Image', link: '#with-image', isSubmenu: true },
    { title: 'With Border', link: '#with-border', isSubmenu: true },
    { title: 'Colors', link: '#colors', isSubmenu: true },
    { title: 'Rounded', link: '#rounded', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
    { title: 'Status Position', link: '#status-position', isSubmenu: true },
    { title: 'Status Colors', link: '#status-colors', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _avatarService: AvatarService) {
    this.examples = this._avatarService.getExamples();
    this.initializeTabs(8);
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
