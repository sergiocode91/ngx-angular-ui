import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertCodeService {
  public codeExamples = {
  codeUseTs: `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
  })
  `,
  codeUseHtml: `
  <div uiAlert variant="primary">
    <div uiAlertTitle>Hello there!</div>
    <div uiAlertDescription>Keep your app updated.</div>
  </div>
  `,
  code1: `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
    template: \`
      <div uiAlert variant="primary">
        <div uiAlertTitle>Hello there!</div>
        <div uiAlertDescription>Keep your app updated for best performance.</div>
      </div>
    \`
  })
  `,
  code2: `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
    template: \`
      <div uiAlert variant="primary" showIcon>
        <lucide-icon name="Megaphone" [size]="18"></lucide-icon>
        <div uiAlertTitle>Hello there!</div>
        <div uiAlertDescription>Regular updates keep your app running smoothly.</div>
      </div>
    \`
  })
  `,
  code3: `
  import { 
    HtmlAlertDirective, 
    HtmlAlertTitleDirective,
    HtmlAlertDescriptionDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlAlertDirective, 
      HtmlAlertTitleDirective, 
      HtmlAlertDescriptionDirective
    ],
    template: \`
      <div uiAlert variant="info" showIcon>
        <lucide-icon name="Info" [size]="18"></lucide-icon>
        <div uiAlertTitle>Info!</div>
        <div uiAlertDescription>Save your work regularly to avoid data loss.</div>
      </div>
      <div uiAlert variant="success" showIcon>
        <lucide-icon name="CircleCheck" [size]="18"></lucide-icon>
        <div uiAlertTitle>Success!</div>
        <div uiAlertDescription>Your changes have been saved successfully.</div>
      </div>
      <div uiAlert variant="warning" showIcon>
        <lucide-icon name="TriangleAlert" [size]="18"></lucide-icon>
        <div uiAlertTitle>Warning!</div>
        <div uiAlertDescription>Unsaved changes detected. Please save your work.</div>
      </div>
      <div uiAlert variant="danger" showIcon>
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

