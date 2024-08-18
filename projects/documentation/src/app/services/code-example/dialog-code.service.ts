import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DialogCodeService {
  public codeExamples = {
  codeUseTs: `
  import { 
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogService,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
    ],
    providers: [DialogService],
  })

  export class DialogComponent {
    constructor(private _dialogService: DialogService) {}

    openDialog(dialogId: string) {
      this._dialogService.open(dialogId);
    }

    closeDialog(dialogId: string) {
      this._dialogService.close(dialogId);
    }
  }
  `,
  codeUseHtml: `
  <div uiDialog dialogId="'uniqueId'">
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
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogService,
  } from 'ngx-angular-ui';
  
  @Component({
    standalone: true,
    imports: [
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
    ],
    providers: [DialogService],
    template: \`
      <button uiButton variant="outline" (click)="openDialog('dialog1')">Open dialog</button>

      <div uiDialog dialogId="dialog1">
        <div uiDialogContent>
          <div uiDialogHeader>
            <div uiDialogTitle>Dialog Title</div>
            <div uiDialogDescription>Dialog Description here.</div>
          </div>
          <div class="text-sm">
            <p>Your content here.</p>
          </div>
          <div uiDialogFooter class="flex justify-end space-x-2">
            <button uiButton variant="outline" (click)="closeDialog('dialog1')">Cancel</button>
            <button uiButton (click)="handleSubmit()">Action</button>
          </div>
        </div>
      </div>
      \`
    })

    export class DialogComponent {
      constructor(private _dialogService: DialogService) {}

      openDialog(dialogId: string) {
        this._dialogService.open(dialogId);
      }
  
      closeDialog(dialogId: string) {
        this._dialogService.close(dialogId);
      }
    }
  `,
  code2: `
  import { 
    Label,
    Input,
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogService,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      Label,
      Input,
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogService,
    ],
    template: \`
      <button uiButton variant="outline" (click)="openDialog('dialog2')">Edit profile</button>

      <div uiDialog dialogId="dialog2">
        <div uiDialogContent>
          <div uiDialogHeader>
            <div uiDialogTitle>Edit profile</div>
            <div uiDialogDescription>Make changes to your profile here.</div>
          </div>
          <div class="grid items-center gap-4">
            <div class="flex flex-col space-y-2">
              <label uiLabel for="email">Email address</label>
              <input uiInput type="email" id="email" placeholder="Enter your email address">
            </div>
            <div class="flex flex-col space-y-2">
              <label uiLabel for="password">Password</label>
              <input uiInput type="password" id="password" placeholder="Enter your password">
            </div>
          </div>
          <div uiDialogFooter class="flex justify-end space-x-2">
            <button uiButton variant="outline" (click)="closeDialog('dialog2')">Cancel</button>
            <button uiButton (click)="handleSubmit()">Save changes</button>
          </div>
        </div>
      </div>
      \`
    })

    export class DialogComponent {
      constructor(private _dialogService: DialogService) {}

      openDialog(dialogId: string) {
        this._dialogService.open(dialogId);
      }
  
      closeDialog(dialogId: string) {
        this._dialogService.close(dialogId);
      }
    }
  `,
  code3: `
  import { 
    Alert,
    Label,
    Input,
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogService,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      Alert,
      Label,
      Input,
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogService,
    ],
    template: \`
      <button uiButton color="danger" (click)="openDialog('dialog3')">Delete project</button>

      <div uiDialog dialogId="dialog3">
        <div uiDialogContent>
          <div uiDialogHeader>
            <div uiDialogTitle>Delete Project</div>
            <div uiDialogDescription>This project will be deleted, along with all its Deployments, Environment Variables and Settings.</div>
          </div>
          <div uiAlert variant="danger">
            <div uiAlertTitle>Warning:</div>
            <div uiAlertDescription>This action is not reversible. Please be certain.</div>
          </div>
          <div class="grid items-center gap-4">
            <div class="flex flex-col space-y-2">
              <label uiLabel for="name">Enter the project name <strong>"project/name"</strong> to continue:</label>
              <input uiInput type="text" id="name">
            </div>
          </div>
          <div uiDialogFooter class="flex justify-end space-x-2">
            <button uiButton variant="outline" (click)="closeDialog('dialog3')">Cancel</button>
            <button uiButton color="danger" (click)="handleSubmit()">Delete project</button>
          </div>
        </div>
      </div>
      \`
    })

    export class DialogComponent {
      constructor(private _dialogService: DialogService) {}

      openDialog(dialogId: string) {
        this._dialogService.open(dialogId);
      }
  
      closeDialog(dialogId: string) {
        this._dialogService.close(dialogId);
      }
    }
  `,
  code4: `
  import { 
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogService,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogService,
    ],
    template: \`
      <button uiButton variant="outline" (click)="openDialog('dialog4')">Privacy Policy</button>

      <div uiDialog dialogId="dialog4">
        <div uiDialogContent>
          <div uiDialogHeader>
            <div uiDialogTitle>Privacy Policy</div>
          </div>
          <div class="text-sm">
            <p>
              At [Company], we are dedicated to protecting your privacy. We collect information to provide, maintain, 
              and improve our services, as well as ensure the safety of our users. This data helps us develop new features 
              and protect public safety.
            </p>
            <p>
              In some cases, we may share your information with third parties, such as with your consent, with service 
              providers and partners, or to meet legal obligations. We take measures to secure your data, but cannot 
              guarantee complete protection.
            </p>                              
          </div>
          <div uiDialogFooter class="flex justify-end space-x-2">
            <button uiButton variant="outline" (click)="closeDialog('dialog4')">Cancel</button>
            <button uiButton (click)="handleSubmit()">Accept</button>
          </div>
        </div>
      </div>
      \`
    })

    export class DialogComponent {
      constructor(private _dialogService: DialogService) {}

      openDialog(dialogId: string) {
        this._dialogService.open(dialogId);
      }
  
      closeDialog(dialogId: string) {
        this._dialogService.close(dialogId);
      }
    }
  `,
  code5: `
  import { 
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogService,
  } from 'ngx-angular-ui';

  @Component({
    standalone: true,
    imports: [
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogService,
    ],
    template: \`
      <button uiButton variant="outline" (click)="openDialog(dialog5)">Medium</button>

      <div uiDialog dialogId="dialog5">
        <div uiDialogContent size="md">
          <div uiDialogHeader>
            <div uiDialogTitle>Medium</div>
          </div>
          <div class="text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
            </p>                              
          </div>
          <div uiDialogFooter class="flex justify-end space-x-2">
            <button uiButton variant="outline" (click)="closeDialog(dialog5)">Cancel</button>
            <button uiButton (click)="handleSubmit()">Accept</button>
          </div>
        </div>
      </div>
      \`
    })

    export class DialogComponent {
      constructor(private _dialogService: DialogService) {}

      openDialog(dialogId: string) {
        this._dialogService.open(dialogId);
      }
  
      closeDialog(dialogId: string) {
        this._dialogService.close(dialogId);
      }
    }
  `,
  };

  getExamples() {
    return this.codeExamples;
  }
}

