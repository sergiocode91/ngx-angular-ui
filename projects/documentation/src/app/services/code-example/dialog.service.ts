import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public codeExamples = {
  codeUseTs: `
  import { 
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Dialog,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [

      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Dialog,
    ],
  })
  `,
  codeUseHtml: `
  <div uiDialog>
    <div uiDialogHeader>
      <div uiDialogTitle>Dialog Title</div>
      <div uiDialogDescription>Dialog Description</div>
    </div>
    <div uiDialogContent>Dialog Content</div>
    <div uiDialogFooter>Dialog Footer</div>
  </div>
  `,
  code1: `
  import { 
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlCardDirective,
      HtmlCardHeaderDirective,
      HtmlCardTitleDirective,
      HtmlCardDescriptionDirective,
      HtmlCardContentDirective,
      HtmlCardFooterDirective,
    ],
    template: \`
      <div uiCard class="w-[550px]">
        <div uiCardHeader>
          <div uiCardTitle>Reset your password</div>
          <div uiCardDescription>Enter your verified email to receive a password reset link.</div>
        </div>
        <div uiCardContent>
          <input uiInput type="email" placeholder="Enter your email address">
        </div>
        <div uiCardFooter class="flex justify-between">
          <button uiButton variant="outline">Cancel</button>
          <button uiButton>Reset password</button>
        </div>
      </div>
    \`
  })
  `,
  code2: `
  import { 
    HtmlCardDirective,
    HtmlCardHeaderDirective,
    HtmlCardTitleDirective,
    HtmlCardDescriptionDirective,
    HtmlCardContentDirective,
    HtmlCardFooterDirective
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      HtmlCardDirective,
      HtmlCardHeaderDirective,
      HtmlCardTitleDirective,
      HtmlCardDescriptionDirective,
      HtmlCardContentDirective,
      HtmlCardFooterDirective,
    ],
    template: \`
      <div uiCard class="w-[350px]">
        <div uiCardHeader>
          <div uiCardTitle>Sign in</div>
          <div uiCardDescription>Enter your account details.</div>
        </div>
        <div uiCardContent class="grid items-center gap-4">
          <div class="flex flex-col space-y-2">
            <label uiLabel for="email">Email address</label>
            <input uiInput type="email" id="email" placeholder="Enter your email address">
          </div>
          <div class="flex flex-col space-y-2">
            <label uiLabel for="password">Password</label>
            <input uiInput type="password" id="password" placeholder="Enter your password">
          </div>
        </div>
        <div uiCardFooter>
          <button uiButton class="w-full">Sign in</button>
        </div>
      </div>
    \`
  })
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

