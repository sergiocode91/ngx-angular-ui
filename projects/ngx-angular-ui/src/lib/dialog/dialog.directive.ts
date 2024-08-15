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
  selector: '[uiDialog]',
  standalone: true,
})
export class HtmlDialogDirective implements OnInit, OnChanges {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() isOpenDialog: boolean = false;
  @Input() dialogId: string = '';
  @Input() class: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.applyClasses();
    if (this.dialogId) {
      this.renderer.setAttribute(this.el.nativeElement, 'data-dialog-id', this.dialogId);
    }
  }

  ngOnChanges() {
    this.applyClasses();
  }

  private applyClasses() {
    const baseClasses =
      'flex items-center justify-center px-5 xl:px-0 transition-opacity duration-300 bg-white/80 dark:bg-black/80 inset-0 fixed z-50';
    const visibilityClasses = this.isOpenDialog
      ? 'opacity-100'
      : 'opacity-0 pointer-events-none';
    const classes = `${baseClasses} ${visibilityClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  @HostListener('click', ['$event'])
  onCloseDialog(event: MouseEvent) {
    if (event.target === this.el.nativeElement) {
      this.isOpenDialog = false;
      this.applyClasses();
    }
  }

  @HostListener('uiDialogOpen')
  openDialog() {
    this.isOpenDialog = true;
    this.applyClasses();
  }

  @HostListener('uiDialogClose')
  closeDialog() {
    this.isOpenDialog = false;
    this.applyClasses();
  }
}
