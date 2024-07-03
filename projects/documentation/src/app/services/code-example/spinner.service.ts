import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
  })
  `,
  codeUseHtml: `
  <div uiSpinner></div>
  `,
  code1: `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
    template: \`
      <div uiSpinner></div>
    \`
  })
  `,
  code2: `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
    template: \`
      <div uiSpinner size="xs"></div>
      <div uiSpinner size="sm"></div>
      <div uiSpinner size="lg"></div>
      <div uiSpinner size="xl"></div>
    \`
  })
  `,
  code3: `
  import { HtmlSpinnerComponent } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlSpinnerComponent],
    template: \`
      <div uiSpinner color="default"></div>
      <div uiSpinner color="primary"></div>
      <div uiSpinner color="secondary"></div>
      <div uiSpinner color="success"></div>
      <div uiSpinner color="warning"></div>
      <div uiSpinner color="danger"></div>
    \`
  })
  `,
  code4: `
  import { 
    HtmlSpinnerComponent,
    HtmlButtonDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlSpinnerComponent, 
      HtmlButtonDirective
    ],
    template: \`
      <button uiButton variant="secondary" disabled>
        <div uiSpinner size="sm" class="mr-3"></div>
        Loading
      </button>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

