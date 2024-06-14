import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiAlert]',
  standalone: true,
})

export class HtmlAlertDirective implements OnInit, OnChanges {
  private _icon: boolean = false;

  @Input() variant:
  | 'primary'
  | 'success'
  | 'destructive'
  | 'warning'
  | 'info' = 'primary';
  @Input() class: string = '';
  @Input() set icon(value: boolean | string) {
    this._icon = value === '' || value === 'true';
    this.iconChange.emit(this._icon);
  }

  get icon(): boolean {
    return this._icon;
  }

  @Output() iconChange = new EventEmitter<boolean>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const variantClass = this.getVariantClass(this.variant);
    const classes = `${variantClass} ${this.class} w-full px-4 py-3 rounded-lg border`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
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