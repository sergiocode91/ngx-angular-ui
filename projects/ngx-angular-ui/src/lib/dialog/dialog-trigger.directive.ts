import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[uiDialogTrigger]',
  standalone: true,
})
export class HtmlDialogTriggerDirective {
  @Input() dialogId: string = '';

  @HostListener('click')
  onClick() {
    const dialog = document.querySelector(`[uiDialog][data-dialog-id="${this.dialogId}"]`);
    if (dialog) {
      dialog.dispatchEvent(new CustomEvent('uiDialogOpen'));
    }
  }
}
