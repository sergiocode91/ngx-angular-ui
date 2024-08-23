import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonCodeService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
  })
  `,
  codeUseHtml: `
  <button uiButton>Button</button>
  `,
  code1: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary">Button</button>
    \`
  })
  `,
  code2: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="secondary">Button</button>
    \`
  })
  `,
  code3: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline">Outline</button>
    \`
  })
  `,
  code4: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary" color="info">Info</button>
      <button uiButton variant="primary" color="help">Help</button>
      <button uiButton variant="primary" color="success">Success</button>
      <button uiButton variant="primary" color="warning">Warning</button>
      <button uiButton variant="primary" color="danger">Danger</button>
    \`
  })
  `,
  code5: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline" color="info">Info</button>
      <button uiButton variant="outline" color="help">Help</button>
      <button uiButton variant="outline" color="success">Success</button>
      <button uiButton variant="outline" color="warning">Warning</button>
      <button uiButton variant="outline" color="danger">Danger</button>
    \`
  })
  `,
  code6: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline" size="sm">Small</button>
      <button uiButton variant="outline" size="md">Medium</button>
      <button uiButton variant="outline" size="lg">Large</button>
    \`
  })
  `,
  code7: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline" rounded="md">Medium</button>
      <button uiButton variant="outline" rounded="lg">Large</button>
      <button uiButton variant="outline" rounded="full">Full</button>
    \`
  })
  `,
  code8: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="ghost">Get started</button>
    \`
  })
  `,
  code9: `
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlButtonDirective],
    template: \`
      <button uiButton variant="link">Don’t have an account?</button>
    \`
  })
  `,
  code10: `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
      <button uiButton variant="outline" size="icon">
        <lucide-icon name="Moon" [size]="18"></lucide-icon>
      </button>
    \`
  })
  `,
  code11: `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary">
        <lucide-icon name="Instagram" [size]="18" class="inline-flex mr-1"></lucide-icon>
        Sign in with Instagram
      </button>
    \`
  })
  `,
  code12: `
  import { LucideAngularModule } from 'lucide-angular';
  import { HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LucideAngularModule, HtmlButtonDirective],
    template: \`
      <button uiButton variant="primary" color="danger" disabled="true">
        <lucide-icon name="Trash" [size]="18" class="inline-flex mr-1"></lucide-icon>
        Delete account
      </button>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

