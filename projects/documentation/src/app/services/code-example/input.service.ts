import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlInputDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlInputDirective],
  })
  `,
  codeUseHtml: `
  <input uiInput type="email" placeholder="Email">
  `,
  code1: `
  import { HtmlInputDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective],
    template: \`
      <input uiInput type="email" placeholder="Enter your email">
    \`
  })
  `,
  code2: `
  import { HtmlInputDirective, HtmlLabelDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective, HtmlLabelDirective],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="email">Email</label>
        <input uiInput type="email" id="email" placeholder="Enter your email">
      </div>
    \`
  })
  `,
  code3: `
  import { HtmlInputDirective, HtmlButtonDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective, HtmlButtonDirective],
    template: \`
      <div class="w-72 flex space-x-2">
        <input uiInput type="email" placeholder="Enter your email">
        <button uiButton>Send</button>
      </div>
    \`
  })
  `,
  code4: `
  import { HtmlInputDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlInputDirective],
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

