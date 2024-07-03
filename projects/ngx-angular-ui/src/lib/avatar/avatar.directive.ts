import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiAvatar]',
  standalone: true,
})
export class HtmlAvatarDirective implements OnInit, OnChanges {
  private _border: boolean = false;
  
  @Input() radius: 'full' | 'lg' | 'md' | 'sm' = 'full';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'lg';
  @Input() color:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger' = 'default';
  @Input() class: string = '';

  
  @Input() set border(value: boolean | string) {
    this._border = value === '' || value === 'true';
  }

  get border(): boolean {
    return this._border;
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const radiusClass = this.getRadiusClass(this.radius);
    const sizeClass = this.getSizeClass(this.size);
    const colorClass = this.getColorClass(this.color);
    const borderClass = this.border ? 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-zinc-950' : '';

    const classes = `${radiusClass} ${sizeClass} ${colorClass} ${borderClass} ${this.class} flex items-center justify-center text-zinc-800 overflow-hidden align-middle box-border bg-zinc-300 dark:bg-zinc-400`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  private getRadiusClass(radius: string): string {
    switch (radius) {
      case 'full':
        return 'rounded-full';
      case 'lg':
        return 'rounded-3xl';
      case 'md':
        return 'rounded-xl';
      case 'sm':
        return 'rounded-lg';
      default:
        return 'full';
    }
  }

  private getSizeClass(size: string): string {
    switch (size) {
      case 'xs':
        return 'w-6 h-6';
      case 'sm':
        return 'w-8 h-8';
      case 'md':
        return 'w-10 h-10';
      case 'lg':
        return 'w-14 h-14';
      case 'xl':
        return 'w-20 h-20';
      default:
        return 'lg';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'default':
        return 'ring-zinc-300';
      case 'primary':
        return 'ring-blue-600';
      case 'secondary':
        return 'ring-violet-600';
      case 'success':
        return 'ring-green-600';
      case 'warning':
        return 'ring-orange-600';
      case 'danger':
        return 'ring-red-600';
      default:
        return 'default';
    }
  }
}
