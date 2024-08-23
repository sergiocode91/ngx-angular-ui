import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[uiDialog]',
  standalone: true,
})
export class DialogElement implements OnInit, OnChanges {
  @Input() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() isOpenDialog: boolean = false;
  @Input() class: string = '';
  @Input() dialogId!: string;

  private dialogSubscription!: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.updateClasses('opacity-0 pointer-events-none');

    this.dialogSubscription = this.dialogService
      .getDialogState(this.dialogId)
      .subscribe((isOpen) => {
        this.updateClasses(
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        );
      });
  }

  ngOnChanges() {
    this.updateClasses('opacity-0 pointer-events-none');
  }

  ngOnDestroy() {
    if (this.dialogSubscription) {
      this.dialogSubscription.unsubscribe();
    }
  }

  private updateClasses(visibilityClasses: string) {
    const baseClasses =
      'flex items-center justify-center px-5 xl:px-0 transition-opacity duration-300 bg-white/80 dark:bg-black/80 inset-0 fixed z-50';
    const classes = `${baseClasses} ${visibilityClasses} ${this.class}`;

    this.renderer.setAttribute(this.el.nativeElement, 'class', classes);
  }

  @HostListener('click', ['$event'])
  onCloseDialog(event: MouseEvent) {
    if (event.target === this.el.nativeElement) {
      this.dialogService.close(this.dialogId);
    }
  }
}
