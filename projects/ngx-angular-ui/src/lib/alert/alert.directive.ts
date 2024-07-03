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
  | 'info'
  | 'success'
  | 'warning'
  | 'danger' = 'primary';
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
      case 'info':
        return 'text-blue-600 border-blue-600 dark:text-blue-800 dark:border-blue-800';
      case 'success':
        return 'text-green-600 border-green-600 dark:text-lime-700 dark:border-lime-700';
      case 'warning':
        return 'text-orange-600 border-orange-600 dark:text-orange-800 dark:border-orange-800';
      case 'danger':
        return 'text-red-600 border-red-600 dark:text-red-800 dark:border-red-800';
      default:
        return 'border-zinc-200 dark:border-zinc-800 dark:text-neutral-50';
    }
  }
}