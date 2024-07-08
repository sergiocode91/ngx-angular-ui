import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiBadgeStatus]',
  standalone: true,
})
export class HtmlBadgeStatusDirective implements OnInit, OnChanges {
  @Input() variant: 'primary' | 'secondary' | 'outline' | 'indicator' = 'primary';
  @Input() color!: 'info' | 'help' | 'success' | 'warning' | 'danger';
  @Input() size: 'sm' | 'md' | 'lg'  = 'md';
  @Input() rounded!: 'md' | 'lg' | 'full';
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const variantClass = this.getVariantClass(this.variant, this.color);
    const sizeClass = this.getSizeClass(this.variant, this.size);
    const colorClass = this.getColorClass(this.variant, this.color);
    const roundedClass = this.getRoundedClass(this.variant, this.rounded);
    const classes = `${variantClass} ${sizeClass} ${colorClass} ${roundedClass} ${this.class} inline-flex items-center justify-center font-medium ${this.variant === 'indicator' ? '' : 'text-sm'} transition-colors`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private getVariantClass(variant: string, color: string): string {
    switch (variant) {
      case 'primary':
        return `shadow-sm ${color ? '' : 'text-white bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90'}`;
      case 'secondary':
        return 'text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 shadow-sm dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80';
      case 'outline':
        return `shadow-sm ${color ? '' : 'text-zinc-900 border border-zinc-200 bg-white hover:bg-zinc-100 dark:text-neutral-50 dark:border-zinc-800 dark:bg-transparent dark:hover:bg-zinc-800'}`;
      case 'indicator':
        return `${color ? '' : 'bg-blue-600'}`;
      default:
        return 'text-white shadow-sm bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90';
    }
  }

  private getColorClass(variant: string, color: string): string {
    switch (color) {
      case 'info':
        return `${
          variant === 'outline' ? 
            'text-blue-600 border border-blue-600 bg-transparent hover:bg-blue-600/5 dark:hover:bg-blue-600/10' :
          variant === 'indicator' ?
            'text-white bg-blue-600' :
            'text-white bg-blue-600 hover:bg-blue-600/90 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-600/90'
        }`;
      case 'help':
        return `${
          variant === 'outline' ? 
            'text-violet-600 border border-violet-600 bg-transparent hover:bg-violet-600/5 dark:hover:bg-violet-600/10' : 
          variant === 'indicator' ?
            'text-white bg-violet-600' :
            'text-white bg-violet-600 hover:bg-violet-600/90 dark:text-white dark:bg-violet-600 dark:hover:bg-violet-600/90'
        }`;
      case 'success':
        return `${
          variant === 'outline' ? 
            'text-green-600 border border-green-600 bg-transparent hover:bg-green-600/5 dark:hover:bg-green-600/10' : 
          variant === 'indicator' ?
            'text-white bg-green-600' :
            'text-white bg-green-600 hover:bg-green-600/90 dark:text-white dark:bg-green-600 dark:hover:bg-green-600/90'
        }`;
      case 'warning':
        return `${
          variant === 'outline' ? 
            'text-orange-600 border border-orange-600 bg-transparent hover:bg-orange-600/5 dark:hover:bg-orange-600/10' : 
          variant === 'indicator' ?
            'text-white bg-orange-600' :
            'text-white bg-orange-600 hover:bg-orange-600/90 dark:text-white dark:bg-orange-600 dark:hover:bg-orange-600/90'
        }`;
      case 'danger':
        return `${
          variant === 'outline' ? 
            'text-red-600 border border-red-600 bg-transparent hover:bg-red-600/5 dark:hover:bg-red-600/10' : 
          variant === 'indicator' ?
            'text-white bg-red-600' :
            'text-white bg-red-600 hover:bg-red-600/90 dark:text-white dark:bg-red-600 dark:hover:bg-red-600/90'
        }`;
      default:
        return '';
    }
  }

  private getSizeClass(variant: string, size: string): string {
    if (variant === 'indicator') {
      switch (size) {
        case 'sm':
          return 'w-4 h-4 text-xs';
        case 'md':
          return 'w-5 h-5 text-sm';
        case 'lg':
          return 'w-6 h-6 text-sm';
        default:
          return 'w-5 h-5 text-sm';
      }
    } else {
      return 'px-2.5 py-0.5';
    }
  }

  private getRoundedClass(variant: string, rounded: string): string {
    if (variant === 'indicator') {
      switch (rounded) {
        case 'md':
          return 'rounded-md';
        case 'lg':
          return 'rounded-lg';
        case 'full':
          return 'rounded-full';
        default:
          return 'rounded-full';
      }
    }

    switch (rounded) {
      case 'md':
        return 'rounded-md';
      case 'lg':
        return 'rounded-lg';
      case 'full':
        return 'rounded-full';
      default:
        return 'rounded-md';
    }
  }
}
