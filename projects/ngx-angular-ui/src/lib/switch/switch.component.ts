import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: '[uiSwitch]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <label class="flex items-center cursor-pointer relative">
      <input 
        type="checkbox" 
        class="sr-only peer" 
        [checked]="checked" 
        (change)="onSwitchChange($event)"
        [disabled]="disabled"
        [ngClass]="disabled ? 'cursor-not-allowed' : ''"
      />
      <div [ngClass]="colorClass + ' ' + switchClass + ' ' + sizeClass + ' ' + (disabled ? 'cursor-not-allowed after:bg-neutral-400 after:dark:bg-zinc-700' : '')">
      </div>
      @if (label) {
        <span class="font-normal text-sm leading-none ml-3 dark:text-neutral-50">
          {{ label }}
        </span>
      }
    </label>
  `,
  styles: ``,
})
export class SwitchElement implements OnInit, OnChanges {
  public _disabled: boolean = false;

  @Input() label: string = '';
  @Input() size: | 'sm' | 'md' | 'lg' = 'sm';
  @Input() color: 'default' | 'info' | 'help' | 'success' | 'warning' | 'danger' = 'default';
  @Input() checked: boolean = false;
  @Output() switchChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() set disabled(value: boolean | string) {
    this._disabled = value === '' || value === 'true';
  }
  
  public switchClass: string = `rounded-full shadow-sm border-2 border-transparent peer peer-focus:outline-none peer-focus:ring-0 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:rounded-full after:shadow-lg after:transition-all`;
  public sizeClass: string = '';
  public colorClass: string = '';

  get disabled(): boolean {
    return this._disabled;
  }

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    this.sizeClass = this.getSizeClass(this.size);
    this.colorClass = this.getColorClass(this.color);
  }

  private getSizeClass(size: string): string {
    switch (size) {
      case 'sm':
        return 'w-9 h-5 after:w-4 after:h-4 peer-checked:after:translate-x-4';
      case 'md':
        return 'w-12 h-6 after:w-5 after:h-5 peer-checked:after:translate-x-6';
      case 'lg':
        return 'w-14 h-7 after:w-6 after:h-6 peer-checked:after:translate-x-7';
      default:
        return 'w-9 h-5 after:w-4 after:h-4 peer-checked:after:translate-x-4';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'default':
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-zinc-950 peer-checked:dark:bg-neutral-50 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-zinc-950';
      case 'info':
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-blue-800 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-blue-200';
      case 'help':
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-violet-700 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-violet-200';
      case 'success':
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-lime-700 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-lime-200';
      case 'warning':
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-orange-700 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-orange-200';
      case 'danger':
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-red-700 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-red-200';
      default:
        return 'bg-zinc-200 dark:bg-zinc-800 peer-checked:bg-zinc-950 peer-checked:dark:bg-neutral-50 after:bg-neutral-50 after:dark:bg-zinc-950 peer-checked:after:bg-neutral-50 peer-checked:after:dark:bg-zinc-950';
    }
  }

  onSwitchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.switchChange.emit(this.checked);
  }
}