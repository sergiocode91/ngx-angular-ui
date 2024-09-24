import { Component, inject } from '@angular/core';
import { SelectElement } from './select.component';

@Component({
  selector: '[uiSelectTrigger]',
  standalone: true,
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[class]': '"min-w-[180px] cursor-pointer"',
    '(click)': 'toggleDropdown()'
  }
})
export class SelectTriggerElement {
  private selectElement = inject(SelectElement, { host: true, optional: true });

  toggleDropdown() {
    if (this.selectElement) {
      this.selectElement.toggleDropdown();
    }
  }
}
