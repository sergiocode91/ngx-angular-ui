import { Component } from '@angular/core';
import {
  HtmlInputDirective,
  HtmlLabelDirective,
  HtmlButtonDirective,

  HtmlDialogCloseDirective,
  HtmlDialogContentDirective,
  HtmlDialogDescriptionDirective,
  HtmlDialogFooterDirective,
  HtmlDialogHeaderDirective,
  HtmlDialogTitleDirective,
  HtmlDialogTriggerDirective,
  HtmlDialogDirective,
} from '../../../../../ngx-angular-ui/src/public-api';

@Component({
  selector: 'app-alert-dialog',
  standalone: true,
  imports: [
    HtmlInputDirective,
    HtmlLabelDirective,
    HtmlButtonDirective,
    
    HtmlDialogCloseDirective,
    HtmlDialogContentDirective,
    HtmlDialogDescriptionDirective,
    HtmlDialogFooterDirective,
    HtmlDialogHeaderDirective,
    HtmlDialogTitleDirective,
    HtmlDialogTriggerDirective,
    HtmlDialogDirective,    
  ],
  templateUrl: './alert-dialog.component.html',
  styles: ``,
})
export class AlertDialogComponent {}
