import { Directive, HostListener, Input } from '@angular/core';
import { Dialog } from './dialog.directive';

@Directive({
  selector: '[uiDialogTrigger]',
  standalone: true,
})
export class DialogTrigger {
  @Input() dialog?: Dialog;

  @HostListener('click')
  onClick() {
    if (this.dialog) {
      this.dialog.open();
    } else {
      console.error('DialogTrigger: No dialog found');
    }
  }
}
