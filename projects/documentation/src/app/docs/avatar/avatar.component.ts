import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  LinksContentComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlAvatarDirective } from '../../../../../ngx-angular-ui/src/lib/avatar/avatar.directive';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';
import { AvatarService } from '../../services/code-example';
import { CodeExamples, LinksContent, Props } from '../../models';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    HeadingComponent,
    PropsComponent,
    HighlightCodeComponent,
    HtmlAvatarDirective,
    HtmlButtonDirective,
    LinksContentComponent,
    TabsComponent
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
    { title: 'With Image', link: '#with-image', isSubmenu: true },
    { title: 'With Border', link: '#with-border', isSubmenu: true },
    { title: 'Colors', link: '#colors', isSubmenu: true },
    { title: 'Rounded', link: '#rounded', isSubmenu: true },
    { title: 'Sizes', link: '#sizes', isSubmenu: true },
  ];

  public examples: CodeExamples;

  constructor(private _avatarService: AvatarService) {
    this.examples = this._avatarService.getExamples();
    this.initializeTabs(9);
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
