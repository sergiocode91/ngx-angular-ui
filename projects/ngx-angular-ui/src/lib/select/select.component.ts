import { Component, ContentChildren, ElementRef, forwardRef, HostListener, inject, Input, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectItemElement } from './select-item.component';
import { SelectService } from './select.service';
import { Subscription } from 'rxjs';

@Component({
  selector: '[uiSelect]',
  standalone: true,
  template: `
    <ng-content select="[uiSelectTrigger]"></ng-content>
    <ng-content select="[uiSelectContent]"></ng-content>
  `,
  host: {
    '[class]': '"h-9 flex items-center font-normal text-sm whitespace-nowrap shadow-sm rounded-md bg-transparent border border-zinc-200 focus:outline-2 focus:outline-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:border-zinc-800 dark:focus:outline-zinc-800 relative"',
    '[class.text-zinc-500]': 'disabled', 
    '[class.dark:text-white/70]': 'disabled',
    '[class.cursor-not-allowed]': 'disabled',
    '[class.opacity-50]': 'disabled',
    '(click)': 'onSelectClick($event)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectElement),
      multi: true
    }
  ]
})
export class SelectElement {
  @ContentChildren(SelectItemElement) items!: QueryList<SelectItemElement>;

  @Input() multiple: boolean = false;
  @Input() disabled: boolean = false;

  public isOpen = false;
  public openUpwards = false;

  public selectedValues: string[] = [];
  public selectedValue: string | null = null;
  public selectedText: string | null = null;

  private subscription!: Subscription;
  private _selectService = inject(SelectService);
  private _el = inject(ElementRef);

  private onChange: (value: string | string[] | null) => void = () => {};
  private onTouched: () => void = () => {};

  get capitalizedValue(): string | null {
    return this.multiple
      ? this.getMultipleSelectedDisplay()
      : this.selectedText
      ? this.capitalize(this.selectedText)
      : null;
  }

  ngOnInit() {
    this.subscription = this._selectService.getOpenSelect().subscribe((openSelect) => {
      if (openSelect !== this) {
        this.isOpen = false;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelectClick(event: Event) {
    if (this.disabled) return;
    event.stopPropagation()
  }

  toggleDropdown() {
    if (this.disabled) return; 
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      const rect = this._el.nativeElement.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      this.openUpwards = spaceBelow < 240 && spaceAbove > spaceBelow;

      this._selectService.setOpenSelect(this);
    }
  }

  selectItem(value: string, text: string) {
    if (this.disabled) return;

    if (this.multiple) {
      this.toggleSelectMultiple(value);
    } else {
      this.selectedValue = value;
      this.selectedText = text;
      this.isOpen = false;
      this.onChange(this.selectedValue);
    }
    this.onTouched();
  }

  toggleSelectMultiple(value: string) {
    const index = this.selectedValues.indexOf(value);
    if (index === -1) {
      this.selectedValues.push(value);
    } else {
      this.selectedValues.splice(index, 1);
    }
    this.onChange(this.selectedValues);
  }

  writeValue(value: string | string[] | null): void {
    if (this.multiple && Array.isArray(value)) {
      this.selectedValues = value;
    } else {
      this.selectedValue = value as string;
    }
  }

  registerOnChange(fn: (value: string | string[] | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  getMultipleSelectedDisplay(): string {
    return this.selectedValues.map(v => this.capitalize(v)).join(', ');
  }  

  capitalize(value: string): string {
    const formattedValue = value.replace(/[_\-.]+/g, ' ');
    return formattedValue
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  }

  getSelectedValue() {
    return this.multiple ? this.selectedValues : this.selectedValue;
  }

  @HostListener('document:click', ['$event'])
  closeDropdownOnClickOutside(event: Event) {
    if (this.isOpen) {
      this.isOpen = false;
      this._selectService.setOpenSelect(null);
    }
  }
}