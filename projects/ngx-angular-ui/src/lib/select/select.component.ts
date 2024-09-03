import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: '[uiSelect]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <div 
        class="w-full h-9 flex items-center justify-between font-normal text-sm whitespace-nowrap cursor-pointer placeholder:text-zinc-500 px-3 py-1 shadow-sm rounded-md bg-transparent border border-zinc-200 focus:outline-2 focus:outline-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:placeholder:text-white/70 dark:border-zinc-800 dark:focus:outline-zinc-800"
        (click)="toggleDropdown()"
      >
        {{ selectedLabel || placeholder }}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 opacity-50"
          aria-hidden="true"
        >
          <path
            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
      @if (isOpen) {
        <div class="w-full font-normal text-sm dark:text-neutral-50 mt-2 rounded shadow-sm p-1 border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 absolute z-10">
        asdasd
        </div>
      }
    </div>
  `,
  styles: ``,
})
export class SelectElement implements OnInit, OnChanges {
  @Input() options: any[] = [];
  @Input() optionLabel: string = 'label';
  @Input() placeholder: string = 'Select an option';

  public isOpen: boolean = false;
  public selectedLabel: string | null = null;
  public selectedValue: string | null = null;

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {

  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }


}