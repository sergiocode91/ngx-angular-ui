import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectElement } from './select.component';

@Component({
  selector: '[uiSelectContent]',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (selectElement?.isOpen) {
      <ng-content></ng-content>
    }
  `,
  host: {
    '[class]': '"w-full max-h-[240px] left-0 font-normal text-sm overflow-auto whitespace-nowrap p-1 shadow-md rounded-md border border-zinc-200 bg-white dark:bg-zinc-950 absolute z-10 dark:text-neutral-50 dark:border-zinc-800 dark:focus:outline-zinc-800"',
    '[style.top]': 'selectElement?.openUpwards ? "auto" : "calc(100% + 6px)"',
    '[style.bottom]': 'selectElement?.openUpwards ? "calc(100% + 6px)" : "auto"',
    '[style.display]': 'selectElement?.isOpen ? "block" : "none"'
  },
})
export class SelectContentElement {
  public selectElement = inject(SelectElement, { host: true, optional: true });
}
