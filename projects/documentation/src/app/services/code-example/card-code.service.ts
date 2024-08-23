import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardCodeService {
  public codeExamples = {
  codeUseTs: `
  import { 
    CardElement,
    CardHeaderElement,
    CardTitleElement,
    CardDescriptionElement,
    CardContentElement,
    CardFooterElement
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      CardElement,
      CardHeaderElement,
      CardTitleElement,
      CardDescriptionElement,
      CardContentElement,
      CardFooterElement,
    ],
  })
  `,
  codeUseHtml: `
  <div uiCard>
    <div uiCardHeader>
      <div uiCardTitle>Card Title</div>
      <div uiCardDescription>Card Description</div>
    </div>
    <div uiCardContent>Card Content</div>
    <div uiCardFooter>Card Footer</div>
  </div>
  `,
  code1: `
  import { 
    CardElement,
    CardHeaderElement,
    CardTitleElement,
    CardDescriptionElement,
    CardContentElement,
    CardFooterElement,
    InputElement,
    ButtonElement
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      CardElement,
      CardHeaderElement,
      CardTitleElement,
      CardDescriptionElement,
      CardContentElement,
      CardFooterElement,
      InputElement,
      ButtonElement
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
    CardElement,
    CardHeaderElement,
    CardTitleElement,
    CardDescriptionElement,
    CardContentElement,
    CardFooterElement,
    InputElement,
    LabelElement,
    ButtonElement
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      CardElement,
      CardHeaderElement,
      CardTitleElement,
      CardDescriptionElement,
      CardContentElement,
      CardFooterElement,
      InputElement,
      LabelElement,
      ButtonElement,
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

