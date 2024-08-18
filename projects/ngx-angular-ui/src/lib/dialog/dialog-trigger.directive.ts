import { Directive, HostListener, Input } from '@angular/core';
import { DialogService } from './dialog.service';

@Directive({
  selector: '[uiDialogTrigger]',
  standalone: true,
})
export class DialogTrigger {
  @Input() dialogId!: string;

  constructor(private dialogService: DialogService) {}

  @HostListener('click')
  onClick() {
    this.dialogService.open(this.dialogId);
  }
}
