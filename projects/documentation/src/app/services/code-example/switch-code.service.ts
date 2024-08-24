import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwitchCodeService {
  public codeExamples = {
  codeUseTs: `
  import { SwitchElement } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [SwitchElement],
  })
  `,
  codeUseHtml: `
  <div uiSwitch label="All new messages" color="default"></div>
  `,
  code1: `
  import { SwitchElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SwitchElement],
    template: \`
      <div uiSwitch></div>
    \`
  })
  `,
  code2: `
  import { SwitchElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SwitchElement],
    template: \`
      <div 
        uiSwitch 
        label="State: {{ switchState ? 'Enabled' : 'Disabled' }}" 
        (switchChange)="onSwitchToggle($event)"
      >
      </div>
    \`
  })

  export class SwitchComponent {
    public switchState: boolean = false;

    onSwitchToggle(state: boolean) {
      this.switchState = state;
    }
  }
  `,
  code3: `
  import { SwitchElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SwitchElement],
    template: \`
      <div uiSwitch label="All new messages"></div>
    \`
  })
  `,
  code4: `
  import { SwitchElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SwitchElement],
    template: \`
      <div uiSwitch label="Info" color="info" [checked]="true"></div>
      <div uiSwitch label="Help" color="help" [checked]="true"></div>
      <div uiSwitch label="Success" color="success" [checked]="true"></div>
      <div uiSwitch label="Warning" color="warning" [checked]="true"></div>
      <div uiSwitch label="Danger" color="danger" [checked]="true"></div>
    \`
  })
  `,
  code5: `
  import { SwitchElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SwitchElement],
    template: \`
      <div uiSwitch size="sm"></div>
      <div uiSwitch size="md"></div>
      <div uiSwitch size="lg"></div>
    \`
  })
  `,
  code6: `
  import { SwitchElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [SwitchElement],
    template: \`
      <div uiSwitch disabled="true"></div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

