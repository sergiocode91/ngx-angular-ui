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
  selector: '[uiAlertDescription]',
  standalone: true,
})
export class HtmlAlertDescriptionDirective implements OnInit, OnChanges {
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
    const baseClasses =
      'text-sm';
    const classes = `${baseClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }
}
