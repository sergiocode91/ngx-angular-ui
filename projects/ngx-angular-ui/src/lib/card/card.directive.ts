import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiCard]',
  standalone: true,
})
export class HtmlCardDirective implements OnInit, OnChanges {
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
      'text-zinc-950 border border-zinc-200 rounded-xl shadow bg-white dark:border-zinc-800 dark:bg-zinc-950';
    const classes = `${baseClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
