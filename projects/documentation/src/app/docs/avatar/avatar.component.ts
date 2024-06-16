import { Component } from '@angular/core';
import {
  HeadingComponent,
  HighlightCodeComponent,
  PropsComponent,
  TabsComponent,
} from '@components/index';
import { HtmlAvatarDirective } from '../../../../../ngx-angular-ui/src/lib/avatar/avatar.directive';
import { HtmlButtonDirective } from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [
    HeadingComponent,
    PropsComponent,
    HighlightCodeComponent,
    HtmlAvatarDirective,
    HtmlButtonDirective,
    TabsComponent
  ],
  templateUrl: './avatar.component.html',
  styles: ``,
})
export class AvatarComponent {
  public activeTabs: { [key: string]: string } = {};
  public props = {
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

  public codeUseTs = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
  })
  `;

  public codeUseHtml = `
  <div uiAvatar>
    <img src="..." alt="avatar" />
  </div>
  `;

  public code1 = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar>
        <span>A</span>
      </div>
    \`
  })
  `;

  public code2 = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar>
        <img src="https://i.pravatar.cc/150?img=1" alt="avatar" />
      </div>
    \`
  })
  `;

  public code3 = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar border>
        <img src="https://i.pravatar.cc/150?img=57" alt="avatar" />
      </div>
    \`
  })
  `;

  public code4 = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar border color="default">
        <img src="https://i.pravatar.cc/150?img=45" alt="avatar" />
      </div>
      <div uiAvatar border color="primary">
        <img src="https://i.pravatar.cc/150?img=40" alt="avatar" />
      </div>
      <div uiAvatar border color="secondary">
        <img src="https://i.pravatar.cc/150?img=67" alt="avatar" />
      </div>
      <div uiAvatar border color="success">
        <img src="https://i.pravatar.cc/150?img=35" alt="avatar" />
      </div>
      <div uiAvatar border color="warning">
        <img src="https://i.pravatar.cc/150?img=39" alt="avatar" />
      </div>
      <div uiAvatar border color="danger">
        <img src="https://i.pravatar.cc/150?img=67" alt="avatar" />
      </div>
    \`
  })
  `;

  public code5 = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar radius="full">
        <img src="https://i.pravatar.cc/150?img=23" alt="avatar" />
      </div>
      <div uiAvatar radius="lg">
        <img src="https://i.pravatar.cc/150?img=10" alt="avatar" />
      </div>
      <div uiAvatar radius="md">
        <img src="https://i.pravatar.cc/150?img=16" alt="avatar" />
      </div>
      <div uiAvatar radius="sm">
        <img src="https://i.pravatar.cc/150?img=13" alt="avatar" />
      </div>
    \`
  })
  `;

  public code6 = `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar size="xs">
        <img src="https://i.pravatar.cc/150?img=21" alt="avatar" />
      </div>
      <div uiAvatar size="sm">
        <img src="https://i.pravatar.cc/150?img=22" alt="avatar" />
      </div>
      <div uiAvatar size="md">
        <img src="https://i.pravatar.cc/150?img=24" alt="avatar" />
      </div>
      <div uiAvatar size="lg">
        <img src="https://i.pravatar.cc/150?img=27" alt="avatar" />
      </div>
      <div uiAvatar size="xl">
        <img src="https://i.pravatar.cc/150?img=37" alt="avatar" />
      </div>
    \`
  })
  `;

  constructor() {
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
