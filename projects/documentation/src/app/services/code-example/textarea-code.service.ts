import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextareaCodeService {
  public codeExamples = {
  codeUseTs: `
  import { TextareaElement } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [TextareaElement],
  })
  `,
  codeUseHtml: `
  <textarea uiTextarea placeholder="Type your message here."></textarea>
  `,
  code1: `
  import { TextareaElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [TextareaElement],
    template: \`
      <textarea uiTextarea placeholder="Type your message here."></textarea>
    \`
  })
  `,
  code2: `
  import { TextareaElement, LabelElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [TextareaElement, LabelElement],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="email">Message</label>
        <textarea uiTextarea placeholder="Type your message here."></textarea>
      </div>
    \`
  })
  `,
  code3: `
  import { 
    TextareaElement, 
    InputElement, 
    ButtonElement 
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      TextareaElement, 
      InputElement, 
      ButtonElement
    ],
    template: \`
      <div class="flex flex-col items-end space-y-4">
        <textarea uiTextarea placeholder="Type your message here."></textarea>
        <button uiButton>Send</button>
      </div>
    \`
  })
  `,
  code4: `
  import { TextareaElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [TextareaElement],
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

