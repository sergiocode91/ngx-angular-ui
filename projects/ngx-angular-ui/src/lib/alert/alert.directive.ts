import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiAlert]',
  standalone: true,
})

export class HtmlAlertDirective implements OnInit, OnChanges {
  public _showIcon: boolean = false;

  @Input() variant:
  | 'primary'
  | 'success'
  | 'destructive'
  | 'warning'
  | 'info' = 'primary';
  @Input() class: string = '';
  @Input() set showIcon(value: boolean | string) {
    this._showIcon = value === '' || value === 'true';
  }

  get showIcon(): boolean {
    return this._showIcon;
  }

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
    const variantClass = this.getVariantClass(this.variant);
    const iconClass = this.showIcon ? '[&>div]:ml-8 relative' : '';
    const classes = `${variantClass} ${iconClass} ${this.class} w-full px-4 py-3 rounded-lg border`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private applyIconClass() {
    if (this._showIcon) {
      const svg = this.el.nativeElement.querySelector('svg');
      if (svg) {
        this.renderer.addClass(svg, 'absolute');
      }
    }
  }

  private getVariantClass(variant: string): string {
    switch (variant) {
      case 'primary':
        return 'border-zinc-200 dark:border-zinc-800 dark:text-neutral-50';
      case 'success':
        return 'border-lime-600 dark:text-lime-900 dark:border-lime-900';
      case 'destructive':
        return 'border-red-600 dark:text-red-900 dark:border-red-900';
      case 'warning':
        return 'border-amber-500 dark:text-amber-900 dark:border-amber-900';
      case 'info':
        return 'border-blue-500 dark:text-blue-900 dark:border-blue-900';
      default:
        return 'primary';
    }
  }
}