import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiBadge]',
  standalone: true,
})
export class HtmlBadgeDirective implements OnInit, OnChanges {
  public _showIcon: boolean = false;

  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() color!: 'info' | 'help' | 'success' | 'warning' | 'danger';
  @Input() rounded: 'md' | 'lg' | 'full' = 'md';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  ngAfterViewInit() {
    this.applyIconClass();
  }

  private applyClasses() {
    const variantClass = this.getVariantClass(this.variant, this.color);
    const colorClass = this.getColorClass(this.variant, this.color);
    const roundedClass = this.getRoundedClass(this.rounded);
    const sizeClass = this.getSizeClass(this.size);
    const classes = `${variantClass} ${colorClass} ${roundedClass} ${sizeClass} ${this.class} inline-flex items-center justify-center font-medium transition-colors`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private applyIconClass() {
    const svg = this.el.nativeElement.querySelector('svg');
    if (svg) {
      this.renderer.addClass(svg, 'mr-1');
    }
  }

  private getVariantClass(variant: string, color: string): string {
    switch (variant) {
      case 'primary':
        return `shadow-sm ${color ? '' : 'text-white bg-zinc-900 hover:bg-zinc-900/90 dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90'}`;
      case 'secondary':
        return 'text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 shadow-sm dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80';
      case 'outline':
        return `shadow-sm ${color ? '' : 'text-zinc-900 border border-zinc-200 bg-white hover:bg-zinc-100 dark:text-neutral-50 dark:border-zinc-800 dark:bg-transparent dark:hover:bg-zinc-800'}`;
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
            'text-white bg-blue-600 hover:bg-blue-600/90 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-600/90'
        }`;
      case 'help':
        return `${
          variant === 'outline' ? 
            'text-violet-600 border border-violet-600 bg-transparent hover:bg-violet-600/5 dark:hover:bg-violet-600/10' : 
            'text-white bg-violet-600 hover:bg-violet-600/90 dark:text-white dark:bg-violet-600 dark:hover:bg-violet-600/90'
        }`;
      case 'success':
        return `${
          variant === 'outline' ? 
            'text-green-600 border border-green-600 bg-transparent hover:bg-green-600/5 dark:hover:bg-green-600/10' : 
            'text-white bg-green-600 hover:bg-green-600/90 dark:text-white dark:bg-green-600 dark:hover:bg-green-600/90'
        }`;
      case 'warning':
        return `${
          variant === 'outline' ? 
            'text-orange-600 border border-orange-600 bg-transparent hover:bg-orange-600/5 dark:hover:bg-orange-600/10' : 
            'text-white bg-orange-600 hover:bg-orange-600/90 dark:text-white dark:bg-orange-600 dark:hover:bg-orange-600/90'
        }`;
      case 'danger':
        return `${
          variant === 'outline' ? 
            'text-red-600 border border-red-600 bg-transparent hover:bg-red-600/5 dark:hover:bg-red-600/10' : 
            'text-white bg-red-600 hover:bg-red-600/90 dark:text-white dark:bg-red-600 dark:hover:bg-red-600/90'
        }`;
      default:
        return '';
    }
  }

  private getRoundedClass(rounded: string): string {
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

  private getSizeClass(size: string): string {
    switch (size) {
      case 'sm':
        return 'text-xs px-2.5 py-0.5';
      case 'md':
        return 'text-xs px-3 py-1';
      case 'lg':
        return 'text-sm px-3.5 py-1';
      default:
        return 'text-xs px-2.5 py-0.5';
    }
  }
}
