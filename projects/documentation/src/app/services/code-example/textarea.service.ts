import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextareaService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlTextareaDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective],
  })
  `,
  codeUseHtml: `
  <textarea uiTextarea placeholder="Type your message here."></textarea>
  `,
  code1: `
  import { HtmlTextareaDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective],
    template: \`
      <textarea uiTextarea placeholder="Type your message here."></textarea>
    \`
  })
  `,
  code2: `
  import { HtmlTextareaDirective, HtmlLabelDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective, HtmlLabelDirective],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="email">Message</label>
        <textarea uiTextarea placeholder="Type your message here."></textarea>
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
      <div class="flex flex-col items-end space-y-4">
        <textarea uiTextarea placeholder="Type your message here."></textarea>
        <button uiButton>Send</button>
      </div>
    \`
  })
  `,
  code4: `
  import { HtmlTextareaDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlTextareaDirective],
    template: \`
      <textarea uiTextarea placeholder="Type your message here." disabled></textarea>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

