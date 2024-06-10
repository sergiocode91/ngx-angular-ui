import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[uiLabel]',
  standalone: true,
})
export class HtmlLabelDirective implements OnInit, OnChanges {
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
      'font-medium text-sm leading-none dark:text-white';
    const classes = `${baseClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
