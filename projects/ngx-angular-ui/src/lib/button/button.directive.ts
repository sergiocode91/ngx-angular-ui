import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiButton]',
  standalone: true,
})
export class ButtonElement implements OnInit, OnChanges {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' = 'primary';
  @Input() color!: 'info' | 'help' | 'success' | 'warning' | 'danger';
  @Input() size: 'sm' | 'md' | 'lg' | 'icon' = 'md';
  @Input() rounded: 'md' | 'lg' | 'full' = 'md';
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const variantClass = this.getVariantClass(this.variant);
    const sizeClass = this.getSizeClass(this.size);
    const colorClass = this.getColorClass(this.color);
    const roundedClass = this.getRoundedClass(this.rounded);
    const classes = `${variantClass} ${sizeClass} ${colorClass} ${roundedClass} ${this.class} inline-flex items-center justify-center font-medium text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private getVariantClass(variant: string): string {
    switch (variant) {
      case 'primary':
        return `shadow-sm ${this.color ? '' : 'text-white bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90'}`;
      case 'secondary':
        return 'text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 shadow-sm dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80';
      case 'outline':
        return `shadow-sm ${this.color ? 'border' : 'text-zinc-900 border border-zinc-200 bg-white hover:bg-zinc-100 dark:text-neutral-50 dark:border-zinc-800 dark:bg-transparent dark:hover:bg-zinc-800'}`;
      case 'ghost':
        return ` ${this.color ? '' : 'text-zinc-900 hover:bg-zinc-100 dark:text-neutral-50 dark:hover:bg-zinc-800'} `;
      case 'link':
        return `underline-offset-4 hover:underline ${this.color ? '' : 'text-zinc-900 dark:text-neutral-50'}`;
      default:
        return 'text-white shadow-sm bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'info':
        return `${
          this.variant === 'outline' ? 
            'text-blue-600 border-blue-600 dark:text-blue-700 dark:border-blue-700' :
          this.variant === 'ghost' ?
            'text-blue-600 hover:text-blue-200 hover:bg-blue-800' :
          this.variant === 'link' ?
            'text-blue-600' :
            'text-blue-200 bg-blue-800 hover:bg-blue-800/90'
        }`;
      case 'help':
        return `${
          this.variant === 'outline' ? 
            'text-violet-600 border-violet-600 dark:text-violet-700 dark:border-violet-700' : 
          this.variant === 'ghost' ?
            'text-violet-600 hover:text-violet-200 hover:bg-violet-800' :
          this.variant === 'link' ?
            'text-violet-600' :
            'text-violet-200 bg-violet-800 hover:bg-violet-800/90'
        }`;
      case 'success':
        return `${
          this.variant === 'outline' ? 
            'text-green-600 border-green-600 dark:text-lime-700 dark:border-lime-700' : 
          this.variant === 'ghost' ?
            'text-lime-600 hover:text-lime-200 hover:bg-lime-800' :
          this.variant === 'link' ?
            'text-lime-600' :
            'text-lime-200 bg-lime-800 hover:bg-lime-800/90'
        }`;
      case 'warning':
        return `${
          this.variant === 'outline' ? 
            'text-orange-600 border-orange-600 dark:text-orange-700 dark:border-orange-700' : 
          this.variant === 'ghost' ?
            'text-orange-600 hover:text-orange-200 hover:bg-orange-800' :
          this.variant === 'link' ?
            'text-orange-600' :
            'text-orange-200 bg-orange-800 hover:bg-orange-800/90'
        }`;
      case 'danger':
        return `${
          this.variant === 'outline' ? 
            'text-red-600 border-red-600 dark:text-red-700 dark:border-red-700' : 
          this.variant === 'ghost' ?
            'text-red-600 hover:text-red-200 hover:bg-red-800' :
          this.variant === 'link' ?
            'text-red-600' :
            'text-red-200 bg-red-800 hover:bg-red-800/90'
        }`;
      default:
        return '';
    }
  }

  private getSizeClass(size: string): string {
    switch (size) {
      case 'sm':
        return 'min-h-8 h-8 px-3 text-xs';
      case 'md':
        return 'min-h-9 h-9 px-4 py-2';
      case 'lg':
        return 'min-h-10 h-10 px-8';
      case 'icon':
        return 'min-w-9 min-h-9 h-9';
      default:
        return 'min-h-9 h-9 px-4 py-2';
    }
  }

  private getRoundedClass(rounded: string): string {
    switch (rounded) {
      case 'full':
        return 'rounded-full';
      case 'lg':
        return 'rounded-lg';
      case 'md':
        return 'rounded-md';
      default:
        return 'rounded-md';
    }
  }
}
