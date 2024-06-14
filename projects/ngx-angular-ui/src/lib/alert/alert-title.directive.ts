import {
  Directive,
  ElementRef,
  Host,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { HtmlAlertDirective } from './alert.directive';

@Directive({
  selector: '[uiAlertTitle]',
  standalone: true,
})
export class HtmlAlertTitleDirective implements OnInit, OnChanges {
  @Input() class: string = '';

  constructor(
    private el: ElementRef, 
    private renderer: Renderer2,
    @Optional() @Host() private alert: HtmlAlertDirective
  ) {
    if (this.alert) {
      this.alert.iconChange.subscribe(icon => {
        this.applyClasses(icon);
      });
    }
  }

  ngOnInit() {
    this.applyClasses(this.alert?.icon);
  }

  ngOnChanges() {
    this.applyClasses(this.alert?.icon);
  }

  private applyClasses(icon: boolean) {
    const baseClasses = 'font-medium text-sm leading-none tracking-tight mb-1';
    const iconClasses = icon ? 'ml-8' : '';
    const classes = `${baseClasses} ${iconClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
