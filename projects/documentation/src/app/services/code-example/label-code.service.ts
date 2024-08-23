import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelCodeService {
  public codeExamples = {
  codeUseTs: `
  import { LabelElement } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [LabelElement],
  })
  `,
  codeUseHtml: `
  <label uiLabel>Username</label>
  `,
  code1: `
  import { LabelElement, InputElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [LabelElement, InputElement],
    template: \`
      <div class="flex flex-col space-y-2">
        <label uiLabel for="Username">Username</label>
        <input uiInput type="text" id="Username" placeholder="Write your username">
      </div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

