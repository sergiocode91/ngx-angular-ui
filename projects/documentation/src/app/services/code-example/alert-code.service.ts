import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertCodeService {
  public codeExamples = {
  codeUseTs: `
  import { 
    AlertElement, 
    AlertTitleElement,
    AlertDescriptionElement
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      AlertElement, 
      AlertTitleElement, 
      AlertDescriptionElement
    ],
  })
  `,
  codeUseHtml: `
  <div uiAlert variant="outline">
    <div uiAlertTitle>Hello there!</div>
    <div uiAlertDescription>Keep your app updated for best performance.</div>
  </div>
  `,
  code1: `
  import { 
    AlertElement, 
    AlertTitleElement,
    AlertDescriptionElement
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      AlertElement, 
      AlertTitleElement, 
      AlertDescriptionElement
    ],
    template: \`
      <div uiAlert variant="outline">
        <div uiAlertTitle>Hello there!</div>
        <div uiAlertDescription>Keep your app updated for best performance.</div>
      </div>
    \`
  })
  `,
  code2: `
  import { LucideAngularModule } from 'lucide-angular';
  import { 
    AlertElement, 
    AlertTitleElement,
    AlertDescriptionElement
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      LucideAngularModule,
      AlertElement, 
      AlertTitleElement, 
      AlertDescriptionElement
    ],
    template: \`
      <div uiAlert variant="outline" showIcon>
        <lucide-icon name="Megaphone" [size]="18"></lucide-icon>
        <div uiAlertTitle>Announcement!</div>
        <div uiAlertDescription>Our new product launch is next week. Stay tuned for updates!</div>
      </div>
    \`
  })
  `,
  code3: `
  import { 
    AlertElement, 
    AlertTitleElement,
    AlertDescriptionElement
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      AlertElement, 
      AlertTitleElement, 
      AlertDescriptionElement
    ],
    template: \`
      <div uiAlert variant="outline-inline" color="danger">
        <div uiAlertTitle>Warning:</div>
        <div uiAlertDescription>This action is not reversible. Please be certain.</div>
      </div>
    \`
  })
  `,
  code4: `
  import { LucideAngularModule } from 'lucide-angular';
  import { 
    AlertElement, 
    AlertTitleElement,
    AlertDescriptionElement
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      LucideAngularModule,
      AlertElement, 
      AlertTitleElement, 
      AlertDescriptionElement,
    ],
    template: \`
      <div uiAlert variant="outline" color="default" showIcon>
        <lucide-icon name="CircleDot" [size]="18"></lucide-icon>
        <div uiAlertTitle>Default!</div>
        <div uiAlertDescription>This is a default alert, providing neutral information.</div>
      </div>
      <div uiAlert variant="outline" color="info" showIcon>
        <lucide-icon name="Info" [size]="18"></lucide-icon>
        <div uiAlertTitle>Info!</div>
        <div uiAlertDescription>This is an informational alert to keep you updated.</div>
      </div>
      <div uiAlert variant="outline" color="help" showIcon>
        <lucide-icon name="CircleHelp" [size]="18"></lucide-icon>
        <div uiAlertTitle>Help!</div>
        <div uiAlertDescription>Contact support if you need assistance with your account.</div>
      </div>
      <div uiAlert variant="outline" color="success" showIcon>
        <lucide-icon name="CircleCheck" [size]="18"></lucide-icon>
        <div uiAlertTitle>Success!</div>
        <div uiAlertDescription>Your changes have been saved successfully.</div>
      </div>
      <div uiAlert variant="outline" color="warning" showIcon>
        <lucide-icon name="TriangleAlert" [size]="18"></lucide-icon>
        <div uiAlertTitle>Warning!</div>
        <div uiAlertDescription>Unsaved changes detected. Please save your work.</div>
      </div>
      <div uiAlert variant="outline" color="danger" showIcon>
        <lucide-icon name="Ban" [size]="18"></lucide-icon>
        <div uiAlertTitle>Error!</div>
        <div uiAlertDescription>Unexpected error. Please try again.</div>
      </div>
    \`
  })
  `,
  code5: `
  import { LucideAngularModule } from 'lucide-angular';
  import { 
    AlertElement, 
    AlertTitleElement,
    AlertDescriptionElement
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      LucideAngularModule,
      AlertElement, 
      AlertTitleElement, 
      AlertDescriptionElement
    ],
    template: \`
      <div uiAlert variant="primary" color="default" showIcon>
        <lucide-icon name="CircleDot" [size]="18"></lucide-icon>
        <div uiAlertTitle>Default!</div>
        <div uiAlertDescription>This is a default alert, providing neutral information.</div>
      </div>
      <div uiAlert variant="primary" color="info" showIcon>
        <lucide-icon name="Info" [size]="18"></lucide-icon>
        <div uiAlertTitle>Info!</div>
        <div uiAlertDescription>This is an informational alert to keep you updated.</div>
      </div>
      <div uiAlert variant="primary" color="help" showIcon>
        <lucide-icon name="Info" [size]="18"></lucide-icon>
        <div uiAlertTitle>Help!</div>
        <div uiAlertDescription>Contact support if you need assistance with your account.</div>
      </div>
      <div uiAlert variant="primary" color="success" showIcon>
        <lucide-icon name="CircleCheck" [size]="18"></lucide-icon>
        <div uiAlertTitle>Success!</div>
        <div uiAlertDescription>Your changes have been saved successfully.</div>
      </div>
      <div uiAlert variant="primary" color="warning" showIcon>
        <lucide-icon name="TriangleAlert" [size]="18"></lucide-icon>
        <div uiAlertTitle>Warning!</div>
        <div uiAlertDescription>Unsaved changes detected. Please save your work.</div>
      </div>
      <div uiAlert variant="primary" color="danger" showIcon>
        <lucide-icon name="Ban" [size]="18"></lucide-icon>
        <div uiAlertTitle>Error!</div>
        <div uiAlertDescription>Unexpected error. Please try again.</div>
      </div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

