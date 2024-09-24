import { Component, ElementRef, Host, inject, Input, Optional } from '@angular/core';
import { SelectElement } from './select.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[uiSelectItem]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex items-center w-full h-8 relative">
      <ng-content></ng-content>
      @if (isSelected()) {
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 dark:text-neutral-50 right-0 absolute" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clip-rule="evenodd" />
        </svg>
      }
    </div>
  `,
  host: {
    '[class]': '"cursor-pointer py-0.5 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-zinc-800"',
    '(click)': 'selectItem()'
  }
})
export class SelectItemElement {
  @Input() value!: string;

  private selectElement = inject(SelectElement, { host: true, optional: true });
  private el = inject(ElementRef);

  selectItem() {
    const text = this.el.nativeElement.innerText.trim();
    if (this.selectElement) {
      this.selectElement.selectItem(this.value, text);
    }
  }

  isSelected(): boolean {
    if (this.selectElement?.multiple) {
      return this.selectElement.selectedValues.includes(this.value);
    } else {
      return this.selectElement?.getSelectedValue() === this.value;
    }
  }
}
