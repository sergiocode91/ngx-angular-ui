import {
  Directive,
  ElementRef,
  Host,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Renderer2,
} from '@angular/core';
import { DialogElement } from './dialog.directive';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[uiDialogContent]',
  standalone: true,
})
export class DialogContentElement implements OnInit, OnChanges {
  @Input() size:
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl' = 'md';
  @Input() class: string = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private _dialogService: DialogService,
    @Optional() @Host() private dialog: DialogElement
  ) {}

  ngOnInit() {
    this.applyClasses();
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const sizeClass = this.getSizeClass(this.size);
    const classes = `${sizeClass} ${this.class} grid shadow-md p-6 gap-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 relative`;

    const button = this.renderer.createElement('button');
    button.classList.add(
      'top-4',
      'right-4',
      'opacity-50',
      'transition-opacity',
      'hover:opacity-100',
      'absolute'
    );

    const svg = this.renderer.createElement(
      'svg',
      'http://www.w3.org/2000/svg'
    );
    this.renderer.setAttribute(svg, 'width', '15');
    this.renderer.setAttribute(svg, 'height', '15');
    this.renderer.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.renderer.setAttribute(svg, 'fill', 'none');
    this.renderer.setAttribute(svg, 'stroke-width', '2');
    this.renderer.setAttribute(svg, 'stroke-linecap', 'round');
    this.renderer.setAttribute(svg, 'stroke-linejoin', 'round');

    const line1 = this.renderer.createElement(
      'line',
      'http://www.w3.org/2000/svg'
    );
    this.renderer.setAttribute(line1, 'x1', '18');
    this.renderer.setAttribute(line1, 'y1', '6');
    this.renderer.setAttribute(line1, 'x2', '6');
    this.renderer.setAttribute(line1, 'y2', '18');

    const line2 = this.renderer.createElement(
      'line',
      'http://www.w3.org/2000/svg'
    );
    this.renderer.setAttribute(line2, 'x1', '6');
    this.renderer.setAttribute(line2, 'y1', '6');
    this.renderer.setAttribute(line2, 'x2', '18');
    this.renderer.setAttribute(line2, 'y2', '18');

    this.renderer.appendChild(svg, line1);
    this.renderer.appendChild(svg, line2);
    this.renderer.appendChild(button, svg);

    svg.classList.add('stroke-black', 'dark:stroke-white');

    this.renderer.listen(button, 'click', () => {
      this._dialogService.close(this.dialog.dialogId);
    });

    this.renderer.appendChild(this.el.nativeElement, button);
    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);

    this.el.nativeElement.appendChild(button);
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
