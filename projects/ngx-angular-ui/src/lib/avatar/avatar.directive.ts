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
  @Input() color: 'primary' | 'info' | 'help' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() status!: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
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
    const statusClass = this.getStatusClass(this.status);
    const classes = `${radiusClass} ${sizeClass} ${colorClass} ${borderClass} ${statusClass} ${this.class} flex items-center justify-center text-zinc-800 align-middle box-border bg-zinc-300 dark:bg-zinc-400 relative`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);

    const img = this.el.nativeElement.querySelector('img');
    if (img) {
      const imgClasses = `w-full h-full object-cover ${radiusClass}`;
      this.renderer.setAttribute(img, 'class', imgClasses);
    }
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
        return 'rounded-full';
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
        return 'w-14 h-14';
    }
  }

  private getColorClass(color: string): string {
    switch (color) {
      case 'primary':
        return 'ring-zinc-300';
      case 'info':
        return 'ring-blue-600';
      case 'help':
        return 'ring-violet-600';
      case 'success':
        return 'ring-green-600';
      case 'warning':
        return 'ring-orange-600';
      case 'danger':
        return 'ring-red-600';
      default:
        return 'ring-zinc-300';
    }
  }

  private getStatusClass(status: string): string {
    const baseClass = 'before:rounded-full before:transform before:border-2 before:border-white before:dark:border-zinc-950 before:absolute';
    const sizeClass = this.getStatusSizeClass(this.size);
    const colorClass = this.getStatusColorClass(this.color);

    switch (status) {
      case 'top-right':
        return `${baseClass} ${sizeClass} ${colorClass} before:top-0 before:right-0 before:translate-x-0.5 before:-translate-y-0.5`;;
      case 'top-left':
        return `${baseClass} ${sizeClass} ${colorClass} before:top-0 before:left-0 before:-translate-x-0.5 before:-translate-y-0.5`;;
      case 'bottom-right':
        return `${baseClass} ${sizeClass} ${colorClass} before:bottom-0 before:right-0 before:translate-x-0.5 before:translate-y-0.5`;;
      case 'bottom-left':
        return `${baseClass} ${sizeClass} ${colorClass} before:bottom-0 before:left-0 before:-translate-x-0.5 before:translate-y-0.5`;;
      default:
        return '';
    }
  }

  private getStatusSizeClass(size: string): string {
    switch (size) {
      case 'xs':
        return 'before:w-2.5 before:h-2.5';
      case 'sm':
        return 'before:w-3 before:h-3';
      case 'md':
        return 'before:w-3 before:h-3';
      case 'lg':
        return 'before:w-4 before:h-4';
      case 'xl':
        return 'before:w-5 before:h-5';
      default:
        return 'before:w-3 before:h-3';
    }
  }

  private getStatusColorClass(color: string): string {
    switch (color) {
      case 'primary':
        return 'before:bg-zinc-300';
      case 'info':
        return 'before:bg-blue-600';
      case 'help':
        return 'before:bg-violet-600';
      case 'success':
        return 'before:bg-green-600';
      case 'warning':
        return 'before:bg-orange-600';
      case 'danger':
        return 'before:bg-red-600';
      default:
        return 'before:bg-green-600';
    }
  }
}