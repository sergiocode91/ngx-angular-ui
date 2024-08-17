import { Component } from '@angular/core';
import {
  HtmlInputDirective,
  HtmlLabelDirective,
  HtmlButtonDirective,
} from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [
    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlButtonDirective, 
  ],
  templateUrl: './alert-dialog.component.html',
  styles: ``,
})
export class AlertDialogComponent {}
