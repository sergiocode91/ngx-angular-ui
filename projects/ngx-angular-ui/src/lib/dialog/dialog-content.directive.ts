import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiDialogContent]',
  standalone: true,
})
export class HtmlDialogContentDirective implements OnInit, OnChanges {
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' = 'md';
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }
  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const sizeClass = this.getSizeClass(this.size);
    const classes = `${sizeClass} ${this.class} grid shadow-md p-6 gap-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    event.stopPropagation();
  }

  private getSizeClass(size: string): string {
    switch (size) {
      case 'xs':
        return 'w-full max-w-xs';
      case 'sm':
        return 'w-full max-w-sm';
      case 'md':
        return 'w-full max-w-md';
      case 'lg':
        return 'w-full max-w-lg';
      case 'xl':
        return 'w-full max-w-xl';
      case '2xl':
        return 'w-full max-w-2xl';
      case '3xl':
        return 'w-full max-w-3xl';
      case '4xl':
        return 'w-full max-w-4xl';
      case '5xl':
        return 'w-full max-w-5xl';
      default:
        return 'w-full max-w-md';
    }
  }
}
