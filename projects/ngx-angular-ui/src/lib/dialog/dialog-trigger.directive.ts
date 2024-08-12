import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[uiDialogTrigger]',
  standalone: true,
})
export class HtmlDialogTriggerDirective {
  @HostListener('click')
  onClick() {
    const dialog = document.querySelector('[uiDialog]');
    if (dialog) {
      dialog.dispatchEvent(new CustomEvent('uiDialogOpen'));
    }
  }
}
