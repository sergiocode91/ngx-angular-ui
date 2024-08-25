import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgressCodeService {
  public codeExamples = {
  codeUseTs: `
  import { ProgressElement } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [ProgressElement],
  })
  `,
  codeUseHtml: `
  <div uiProgress [progress]="65"></div>
  `,
  code1: `
  import { ProgressElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [ProgressElement],
    template: \`
      <div uiProgress [progress]="currentProgress"></div>
    \`
  })

  export class SwitchComponent {
    public currentProgress: number = 0;

    ngOnInit() {
      setTimeout(() => {
        this.currentProgress = 65;
      }, 1500);
    }
  }
  `,
  code2: `
  import { ProgressElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [ProgressElement],
    template: \`
      <div uiProgress [progress]="65" size="xs"></div>
      <div uiProgress [progress]="55" size="sm"></div>
      <div uiProgress [progress]="45" size="md"></div>
      <div uiProgress [progress]="35" size="lg"></div>
    \`
  })
  `,
  code3: `
  import { ProgressElement } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [ProgressElement],
    template: \`
      <div uiProgress [progress]="65" color="info"></div>
      <div uiProgress [progress]="65" color="help"></div>
      <div uiProgress [progress]="65" color="success"></div>
      <div uiProgress [progress]="65" color="warning"></div>
      <div uiProgress [progress]="65" color="danger"></div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

