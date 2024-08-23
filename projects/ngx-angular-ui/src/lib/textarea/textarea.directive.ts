import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiTextarea]',
  standalone: true,
})
export class TextareaElement implements OnInit, OnChanges {
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
      'w-full min-h-16 flex bg-transparent border border-input rounded-md px-3 py-2 font-normal text-sm placeholder:text-zinc-400 shadow-sm focus:outline-2 focus:outline-neutral-500 disabled:cursor-not-allowed disabled:opacity-50 dark:text-neutral-50 dark:placeholder:text-white/70 dark:border-zinc-800 dark:focus:outline-zinc-800';
    const classes = `${baseClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
