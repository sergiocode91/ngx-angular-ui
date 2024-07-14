import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
  })
  `,
  codeUseHtml: `
  <div uiBadge>Badge</div>
  `,
  code1: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="primary">Badge</div>
    \`
  })
  `,
  code2: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="secondary">Badge</div>
    \`
  })
  `,
  code3: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="outline">Badge</div>
    \`
  })
  `,
  code4: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="primary" color="info">Info</div>
      <div uiBadge variant="primary" color="help">Help</div>
      <div uiBadge variant="primary" color="success">Success</div>
      <div uiBadge variant="primary" color="warning">Warning</div>
      <div uiBadge variant="primary" color="danger">Danger</div>
    \`
  })
  `,
  code5: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="outline" color="info">Info</div>
      <div uiBadge variant="outline" color="help">Help</div>
      <div uiBadge variant="outline" color="success">Success</div>
      <div uiBadge variant="outline" color="warning">Warning</div>
      <div uiBadge variant="outline" color="danger">Danger</div>
    \`
  })
  `,
  code6: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="primary" color="help" size="sm">Small</div>
      <div uiBadge variant="primary" color="help" size="md">Medium</div>
      <div uiBadge variant="primary" color="help" size="lg">Large</div>
    \`
  })
  `,
  code7: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge variant="primary" rounded="md">Badge</div>
      <div uiBadge variant="primary" rounded="lg">Badge</div>
      <div uiBadge variant="primary" rounded="full">Badge</div>
    \`
  })
  `,
  code8: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlBadgeDirective,
      HtmlButtonDirective
    ],
    template: \`
      <button uiButton variant="secondary" rounded="full">
        Inbox 
        <div uiBadge variant="primary" color="danger" rounded="full" class="ml-2">
          99+
        </div>
      </button>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

