import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputCodeService {
  public codeExamples = {
  codeUseTs: `
  import { InputElement } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [InputElement],
  })
  `,
  codeUseHtml: `
  <input uiInput type="email" placeholder="Email">
  `,
  code1: `
  import { InputElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [InputElement],
    template: \`
      <input uiInput type="email" placeholder="Enter your email">
    \`
  })
  `,
  code2: `
  import { InputElement, LabelElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [InputElement, HtmlLabelDirective],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="email">Email</label>
        <input uiInput type="email" id="email" placeholder="Enter your email">
      </div>
    \`
  })
  `,
  code3: `
  import { InputElement, ButtonElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [InputElement, ButtonElement],
    template: \`
      <div class="w-72 flex space-x-2">
        <input uiInput type="email" placeholder="Enter your email">
        <button uiButton>Send</button>
      </div>
    \`
  })
  `,
  code4: `
  import { InputElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [InputElement],
    template: \`
      <input uiInput type="email" placeholder="Enter your email" disabled>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

