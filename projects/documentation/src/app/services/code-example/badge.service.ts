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
      <div uiBadge size="sm">Small</div>
      <div uiBadge size="md">Medium</div>
      <div uiBadge size="lg">Large</div>
    \`
  })
  `,
  code8: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge rounded="md">Medium</div>
      <div uiBadge rounded="lg">Large</div>
      <div uiBadge rounded="full">Full</div>
    \`
  })
  `,
  code9: `
  import { HtmlBadgeDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlBadgeDirective],
    template: \`
      <div uiBadge size="sm">
        <lucide-icon name="Shield" [size]="12"></lucide-icon>
        Small
      </div>
      <div uiBadge size="md">
        <lucide-icon name="Shield" [size]="14"></lucide-icon>
        Medium
      </div>
      <div uiBadge size="lg">
        <lucide-icon name="Shield" [size]="16"></lucide-icon>
        Large
      </div>
    \`
  })
  `,
  code10: `
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

