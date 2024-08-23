import { Component } from '@angular/core';
import { InputElement, LabelElement, ButtonElement } from 'ngx-angular-ui';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [InputElement, LabelElement, ButtonElement],
  templateUrl: './alert-dialog.component.html',
  styles: ``,
})
export class AlertDialogComponent {}
