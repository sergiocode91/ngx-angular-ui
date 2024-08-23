import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: '[uiSpinner]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="sizeClass + ' animate-spin relative'">
      <div class="flex justify-center items-center w-full h-full top-0 left-0 absolute">
        <svg class="transform -rotate-80" viewBox="0 0 36 36">
          <circle
            [attr.class]="colorClass"
            cx="18"
            cy="18"
            r="15.9155"
            fill="none"
            stroke-width="3.5"
            stroke-dasharray="90 100"
            stroke-linecap="round"
            stroke="currentColor"
            stroke-dashoffset="9"
          />
        </svg>
      </div>
    </div>
  `,
  styles: ``,
})
export class SpinnerElement implements OnInit, OnChanges {
  @Input() size: | 'xs' | 'sm' | 'lg' | 'xl' = 'lg';
  @Input() color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger' = 'default';

  sizeClass: string = '';
  colorClass: string = '';

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
      case 'xs':
        return 'w-3.5 h-3.5';
      case 'sm':
        return 'w-5 h-5';
      case 'lg':
        return 'w-8 h-8';
      case 'xl':
        return 'w-10 h-10';
      default:
        return 'sm';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'default':
        return 'text-zinc-400 dark:text-zinc-500';
      case 'primary':
        return 'text-blue-600';
      case 'secondary':
        return 'text-violet-600';
      case 'success':
        return 'text-green-600';
      case 'warning':
        return 'text-orange-600';
      case 'danger':
        return 'text-red-600';
      default:
        return 'default';
    }
  }
}