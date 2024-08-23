import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeCodeService {
  public codeExamples = {
  codeUseTs: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
  })
  `,
  codeUseHtml: `
  <div uiBadge>Badge</div>
  `,
  code1: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="primary">Badge</div>
    \`
  })
  `,
  code2: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="secondary">Badge</div>
    \`
  })
  `,
  code3: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="outline">Badge</div>
    \`
  })
  `,
  code4: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
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
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
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
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="primary" color="help" size="sm">Small</div>
      <div uiBadge variant="primary" color="help" size="md">Medium</div>
      <div uiBadge variant="primary" color="help" size="lg">Large</div>
    \`
  })
  `,
  code7: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="outline" size="sm">Small</div>
      <div uiBadge variant="outline" size="md">Medium</div>
      <div uiBadge variant="outline" size="lg">Large</div>
    \`
  })
  `,
  code8: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="outline" rounded="md">Medium</div>
      <div uiBadge variant="outline" rounded="lg">Large</div>
      <div uiBadge variant="outline" rounded="full">Full</div>
    \`
  })
  `,
  code9: `
  import { BadgeElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [BadgeElement],
    template: \`
      <div uiBadge variant="outline" size="sm">
        <lucide-icon name="Shield" [size]="12"></lucide-icon>
        Small
      </div>
      <div uiBadge variant="outline" size="md">
        <lucide-icon name="Shield" [size]="14"></lucide-icon>
        Medium
      </div>
      <div uiBadge variant="outline" size="lg">
        <lucide-icon name="Shield" [size]="16"></lucide-icon>
        Large
      </div>
    \`
  })
  `,
  code10: `
  import { BadgeElement, ButtonElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      BadgeElement,
      ButtonElement
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

