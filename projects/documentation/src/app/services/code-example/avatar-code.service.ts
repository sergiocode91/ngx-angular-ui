import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvatarCodeService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
  })
  `,
  codeUseHtml: `
  <div uiAvatar>
    <img src="..." alt="avatar" />
  </div>
  `,
  code1: `
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
  `,
  code2: `
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
  `,
  code3: `
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
  `,
  code4: `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar border color="primary">
        <img src="https://i.pravatar.cc/150?img=45" alt="avatar" />
      </div>
      <div uiAvatar border color="info">
        <img src="https://i.pravatar.cc/150?img=40" alt="avatar" />
      </div>
      <div uiAvatar border color="help">
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
  `,
  code5: `
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
  `,
  code6: `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar size="xs" status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=21" alt="avatar" />
      </div>
      <div uiAvatar size="sm" status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=22" alt="avatar" />
      </div>
      <div uiAvatar size="md" status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=24" alt="avatar" />
      </div>
      <div uiAvatar size="lg" status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=27" alt="avatar" />
      </div>
      <div uiAvatar size="xl" status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=37" alt="avatar" />
      </div>
    \`
  })
  `,
  code7: `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=29" alt="avatar" />
      </div>
      <div uiAvatar status="bottom-right" color="success">
        <img src="https://i.pravatar.cc/150?img=26" alt="avatar" />
      </div>
      <div uiAvatar status="top-left" color="success">
        <img src="https://i.pravatar.cc/150?img=25" alt="avatar" />
      </div>
      <div uiAvatar status="bottom-left" color="success">
        <img src="https://i.pravatar.cc/150?img=28" alt="avatar" />
      </div>
    \`
  })
  `,
  code8: `
  import { HtmlAvatarDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlAvatarDirective],
    template: \`
      <div uiAvatar status="top-right" color="primary">
        <img src="https://i.pravatar.cc/150?img=60" alt="avatar" />
      </div>
      <div uiAvatar status="top-right" color="info">
        <img src="https://i.pravatar.cc/150?img=61" alt="avatar" />
      </div>
      <div uiAvatar status="top-right" color="help">
        <img src="https://i.pravatar.cc/150?img=62" alt="avatar" />
      </div>
      <div uiAvatar status="top-right" color="success">
        <img src="https://i.pravatar.cc/150?img=63" alt="avatar" />
      </div>
      <div uiAvatar status="top-right" color="warning">
        <img src="https://i.pravatar.cc/150?img=64" alt="avatar" />
      </div>
      <div uiAvatar status="top-right" color="danger">
        <img src="https://i.pravatar.cc/150?img=65" alt="avatar" />
      </div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

