import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelService {
  public codeExamples = {
  codeUseTs: `
  import { HtmlLabelDirective } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [HtmlLabelDirective],
  })
  `,
  codeUseHtml: `
  <label uiLabel>Username</label>
  `,
  code1: `
  import { HtmlLabelDirective, HtmlInputDirective } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [HtmlLabelDirective, HtmlInputDirective],
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

