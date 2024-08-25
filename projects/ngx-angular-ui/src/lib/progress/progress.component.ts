import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: '[uiProgress]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [ngClass]="sizeClass + ' w-80 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800 relative'"
      role="progressbar"
      [attr.aria-valuenow]="progress"
      [attr.aria-valuemin]="0"
      [attr.aria-valuemax]="100"
      [attr.aria-valuetext]="label ? label + ' ' + progress + '%' : progress + '%'"
      [attr.aria-label]="label || 'Progress Bar'"
      >
      <div [ngClass]="colorClass + ' flex-1 w-full h-full rounded-full transition-all'" [ngStyle]="{ transform: 'translateX(' + getTranslateX() + '%)' }"></div>
    </div>
  `,
  styles: ``,
})
export class ProgressElement implements OnInit, OnChanges {
  @Input() progress: number = 0;
  @Input() label: string = '';
  @Input() size: | 'xs' | 'sm' | 'md' | 'lg' = 'sm';
  @Input() color: 'default' | 'info' | 'help' | 'success' | 'warning' | 'danger' = 'default';
  
  public sizeClass: string = '';
  public colorClass: string = '';

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
        return 'h-1';
      case 'sm':
        return 'h-2';
      case 'md':
        return 'h-3';
      case 'lg':
        return 'h-4';
      default:
        return 'h-2';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'default':
        return 'bg-zinc-900 dark:bg-neutral-50';
      case 'info':
        return 'bg-blue-700';
      case 'help':
        return 'bg-violet-700';
      case 'success':
        return 'bg-lime-700';
      case 'warning':
        return 'bg-orange-700';
      case 'danger':
        return 'bg-red-700';
      default:
        return 'bg-zinc-900 dark:bg-neutral-50';
    }
  }

  getTranslateX(): number {
    return -(100 - this.progress);
  }

  validateProgress() {
    if (this.progress < 0) this.progress = 0;
    if (this.progress > 100) this.progress = 100;
  }
}