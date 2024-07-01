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
export class HtmlButtonDirective implements OnInit, OnChanges {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' = 'primary';
  @Input() color!: 'info' | 'help' | 'success' | 'warning' | 'danger';
  @Input() size: 'sm' | 'md' | 'lg' | 'icon' = 'md';
  @Input() rounded: 'full' | 'md' = 'md';
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
    const classes = `${variantClass} ${sizeClass} ${colorClass} ${roundedClass} ${this.class} inline-flex items-center justify-center font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private getVariantClass(variant: string): string {
    switch (variant) {
      case 'primary':
        return `focus-visible:ring-zinc-400 shadow-sm ${this.color ? '' : 'text-white bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90'}`;
      case 'secondary':
        return 'text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 focus-visible:ring-zinc-400 shadow-sm dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80';
      case 'outline':
        return `focus-visible:ring-zinc-400 shadow-sm ${this.color ? '' : 'text-zinc-900 border border-zinc-200 bg-white hover:bg-zinc-100 dark:text-neutral-50 dark:border-zinc-800 dark:bg-transparent dark:hover:bg-zinc-800'}`;
      case 'ghost':
        return 'text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400 dark:text-neutral-50 dark:hover:bg-zinc-800';
      case 'link':
        return 'text-zinc-900 underline-offset-4 hover:underline focus-visible:ring-zinc-400 dark:text-neutral-50';
      default:
        return 'text-white shadow-sm bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'info':
        return `${
          this.variant === 'outline' ? 
            'text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600/5 dark:hover:bg-blue-600/10' : 
            'text-white bg-blue-600 hover:bg-blue-600/90 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-600/90'
        }`;
      case 'help':
        return `${
          this.variant === 'outline' ? 
            'text-violet-600 border border-violet-600 bg-transparent hover:bg-violet-600/5 dark:hover:bg-violet-600/10' : 
            'text-white bg-violet-600 hover:bg-violet-600/90 dark:text-white dark:bg-violet-600 dark:hover:bg-violet-600/90'
        }`;
      case 'success':
        return `${
          this.variant === 'outline' ? 
            'text-green-600 border border-green-600 bg-transparent hover:bg-green-600/5 dark:hover:bg-green-600/10' : 
            'text-white bg-green-600 hover:bg-green-600/90 dark:text-white dark:bg-green-600 dark:hover:bg-green-600/90'
        }`;
      case 'warning':
        return `${
          this.variant === 'outline' ? 
            'text-orange-600 border border-orange-600 bg-transparent hover:bg-orange-600/5 dark:hover:bg-orange-600/10' : 
            'text-white bg-orange-600 hover:bg-orange-600/90 dark:text-white dark:bg-orange-600 dark:hover:bg-orange-600/90'
        }`;
      case 'danger':
        return `${
          this.variant === 'outline' ? 
            'text-red-600 border border-red-600 bg-transparent hover:bg-red-600/5 dark:hover:bg-red-600/10' : 
            'text-white bg-red-600 hover:bg-red-600/90 dark:text-white dark:bg-red-600 dark:hover:bg-red-600/90'
        }`;
      default:
        return '';
    }
  }

  private getSizeClass(size: string): string {
    switch (size) {
      case 'sm':
        return 'h-8 px-3 text-xs';
      case 'md':
        return 'h-9 px-4 py-2';
      case 'lg':
        return 'h-10 px-8';
      case 'icon':
        return 'h-9 w-9';
      default:
        return 'h-9 px-4 py-2';
    }
  }

  private getRoundedClass(rounded: string): string {
    switch (rounded) {
      case 'full':
        return 'rounded-full';
      case 'md':
        return 'rounded-md';
      default:
        return 'rounded-md';
    }
  }
}
