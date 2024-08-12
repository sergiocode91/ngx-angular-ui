import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[uiDialogClose]',
  standalone: true,
})
export class HtmlDialogCloseDirective {
  @HostListener('click', ['$event'])
  onClick(event: Event) {
    const dialog = (event.target as HTMLElement).closest('[uiDialog]');
    if (dialog) {
      dialog.dispatchEvent(new CustomEvent('uiDialogClose'));
    }
  }
}
