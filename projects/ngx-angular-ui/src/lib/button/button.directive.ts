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
  @Input() variant!:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link';
  @Input() color: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'default';
  @Input() size: 'sm' | 'md' | 'lg' | 'icon' = 'md';
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
    const classes = `${variantClass} ${sizeClass} ${colorClass} ${this.class} inline-flex items-center justify-center font-medium text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private getVariantClass(variant: string): string {
    switch (variant) {
      case 'default':
        return '';
      case 'primary':
        return '';
      case 'secondary':
        return '';
      case 'outline':
        return '';
      case 'destructive':
        return 'text-white bg-red-600 hover:bg-red-600/90 focus-visible:ring-zinc-400 shadow-sm';
      case 'ghost':
        return 'text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400 dark:text-neutral-50 dark:hover:bg-zinc-800';
      case 'link':
        return 'text-zinc-900 underline-offset-4 hover:underline focus-visible:ring-zinc-400 dark:text-neutral-50';
      default:
        return '';
    }
  }

  private getColorClass(color: string): string {
    
    switch (color) {
      case 'default':
        return `${
            this.variant === 'outline' ? 
              'text-zinc-900 shadow-sm border border-zinc-200 bg-transparent hover:bg-zinc-100 dark:text-neutral-50 dark:border-zinc-800 dark:bg-transparent dark:hover:bg-zinc-800' : 
              'text-white shadow-sm bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90'
        }`;
      case 'primary':
        return `${
          this.variant === 'outline' ? 
            'text-blue-500 shadow-sm border border-blue-500 bg-transparent hover:bg-blue-500/5 dark:hover:bg-blue-500/10' : 
            'text-white shadow-sm bg-blue-500 hover:bg-blue-500/90'
        }`;
      case 'secondary':
        return `${
          this.variant === 'outline' ? 
            'text-zinc-800 shadow-sm border border-zinc-800 bg-transparent hover:bg-blue-500/5 dark:hover:bg-blue-500/10' : 
            'text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 shadow-sm dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80'
        }`;
      case 'success':
        return `${
          this.variant === 'outline' ? 
            'text-green-500 shadow-sm border border-green-500 bg-transparent hover:bg-green-500/5 dark:hover:bg-green-500/10' : 
            'text-white shadow-sm bg-green-500 hover:bg-green-500/90'
        }`;
      case 'warning':
        return `${
          this.variant === 'outline' ? 
            'text-orange-600 shadow-sm border border-orange-600 bg-transparent hover:bg-orange-600/5 dark:hover:bg-orange-600/10' : 
            'text-white shadow-sm bg-orange-600 hover:bg-orange-600/90'
        }`;
      case 'danger':
        return `${
          this.variant === 'outline' ? 
            'text-red-600 shadow-sm border border-red-600 bg-transparent hover:bg-red-600/5 dark:hover:bg-red-600/10' : 
            'text-white shadow-sm bg-red-600 hover:bg-red-600/90'
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
        return 'md';
    }
  }
}
