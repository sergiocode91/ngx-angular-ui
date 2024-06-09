import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiInput]',
  standalone: true,
})
export class HtmlInputDirective implements OnInit, OnChanges {
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const baseClasses =
      'w-full h-9 flex font-normal text-sm placeholder:text-zinc-500 px-3 py-1 shadow-sm rounded-md bg-transparent border border-input focus:outline-2 focus:outline-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:placeholder:text-white dark:border-zinc-800 dark:focus:outline-zinc-800';
    const classes = `${baseClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
