import { Component, inject, Input } from '@angular/core';
import { SelectElement } from './select.component';

@Component({
  selector: '[uiSelectValue]',
  standalone: true,
  template: `
    <span class="w-full flex items-center h-9 px-3 py-1">
      <span class="truncate pr-6">{{ selectElement.capitalizedValue || placeholder }}</span>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-50 right-2 absolute" aria-hidden="true">
        <path 
          d="M4.93 5.43c-.18.18-.18.46 0 .64.18.18.46.18.64 0L7.5 4.14l1.93 1.93c.18.18.46.18.64 0 .18-.18.18-.46 0-.64L7.82 3.18c-.08-.08-.19-.13-.32-.13s-.24.05-.32.13L4.93 5.43ZM10.07 9.57c.18-.18.18-.46 0-.64-.18-.18-.46-.18-.64 0L7.5 10.86 5.57 8.93c-.18-.18-.46-.18-.64 0-.18.18-.18.46 0 .64l2.25 2.25c.18.18.46.18.64 0l2.25-2.25Z" 
          fill="currentColor" 
          fill-rule="evenodd" 
          clip-rule="evenodd"
        />
      </svg>
    </span>
  `,
})
export class SelectValueElement {
  @Input() placeholder: string = 'Select an option';

  public selectElement = inject(SelectElement, { host: true });

}
