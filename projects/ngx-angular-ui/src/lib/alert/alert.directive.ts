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

export class AlertElement implements OnInit, OnChanges {
  public _showIcon: boolean = false;

  @Input() variant: 'primary' | 'outline' | 'primary-inline' | 'outline-inline' = 'outline';
  @Input() color!: 'default' |'info' | 'help' | 'success' | 'warning' | 'danger';
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
    const colorClass = this.getColorClass(this.variant, this.color);
    const iconClass = this.showIcon ? '[&>div]:ml-8 relative' : '';
    const inlineClass = this.variant === 'primary-inline' || this.variant === 'outline-inline' ? 'flex items-center gap-2 [&>div]:mb-0' : '';
    const classes = `${colorClass} ${iconClass} ${inlineClass} ${this.class} w-full px-4 py-3 rounded-lg border`;

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

  private getColorClass(variant: string, color: string): string {
    switch (color) {
      case 'default':
        return `${
          variant === 'outline' || variant === 'outline-inline' ?
            'border-zinc-200 dark:text-neutral-50 dark:border-zinc-800' :
            'text-white border-zinc-900 bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800 dark:bg-zinc-800'
        }`;
      case 'info':
        return `${
          variant === 'outline' || variant === 'outline-inline' ?
            'text-blue-600 border-blue-600 dark:text-blue-700 dark:border-blue-700' :
            'text-blue-200 border-blue-800 bg-blue-800'
        }`;
      case 'help':
        return `${
          variant === 'outline' || variant === 'outline-inline' ?
            'text-violet-600 border-violet-600 dark:text-violet-700 dark:border-violet-700' :
            'text-violet-200 border-violet-800 bg-violet-800'
        }`;
      case 'success':
        return `${
          variant === 'outline' || variant === 'outline-inline' ?
            'text-green-600 border-green-600 dark:text-lime-700 dark:border-lime-700' :
            'text-lime-200 border-lime-800 bg-lime-800'
        }`;
      case 'warning':
        return `${
          variant === 'outline' || variant === 'outline-inline' ?
            'text-orange-600 border-orange-600 dark:text-orange-700 dark:border-orange-700' :
            'text-orange-200 border-orange-800 bg-orange-800'
        }`;
      case 'danger':
        return `${
          variant === 'outline' || variant === 'outline-inline' ?
            'text-red-600 border-red-600 dark:text-red-700 dark:border-red-700' :
            'text-red-200 border-red-800 bg-red-800'
        }`;
      default:
        return `${
          variant === 'outline' || variant === 'outline-inline' ? 
            'border-zinc-200 dark:text-neutral-50 dark:border-zinc-800' :
            'text-white border-zinc-900 bg-zinc-900 dark:text-zinc-200 dark:border-zinc-800 dark:bg-zinc-800'
        }`;
    }
  }
}