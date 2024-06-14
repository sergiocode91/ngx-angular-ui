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
  @Input() variant:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'destructive'
    | 'ghost'
    | 'link' = 'primary';
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';
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
    const classes = `${variantClass} ${sizeClass} ${this.class} inline-flex items-center justify-center font-medium text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private getVariantClass(variant: string): string {
    switch (variant) {
      case 'primary':
        return 'text-white bg-zinc-900 hover:bg-zinc-900/90 focus-visible:ring-zinc-400 shadow dark:text-zinc-900 dark:bg-neutral-50 dark:hover:bg-zinc-50/90';
      case 'secondary':
        return 'text-zinc-900 bg-zinc-100 hover:bg-zinc-100/80 focus-visible:ring-zinc-400 shadow-sm dark:text-white dark:bg-zinc-800 dark:hover:bg-zinc-800/80';
      case 'outline':
        return 'text-zinc-900 border border-zinc-200 bg-white hover:bg-zinc-100 focus-visible:ring-zinc-400 shadow-sm dark:text-neutral-50 dark:border-zinc-800 dark:bg-transparent dark:hover:bg-zinc-800';
      case 'destructive':
        return 'text-white bg-red-600 hover:bg-red-600/90 focus-visible:ring-zinc-400 shadow-sm';
      case 'ghost':
        return 'text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400 dark:text-neutral-50 dark:hover:bg-zinc-800';
      case 'link':
        return 'text-zinc-900 underline-offset-4 hover:underline focus-visible:ring-zinc-400 dark:text-neutral-50';
      default:
        return 'primary';
    }
  }

  private getSizeClass(size: string): string {
    switch (size) {
      case 'default':
        return 'h-9 px-4 py-2';
      case 'sm':
        return 'h-8 px-3 text-xs';
      case 'lg':
        return 'h-10 px-8';
      case 'icon':
        return 'h-9 w-9';
      default:
        return 'default';
    }
  }
}
