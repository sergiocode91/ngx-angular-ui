import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private dialogsState: { [id: string]: BehaviorSubject<boolean> } = {};

  getDialogState(id: string) {
    if (!this.dialogsState[id]) {
      this.dialogsState[id] = new BehaviorSubject<boolean>(false);
    }
    return this.dialogsState[id].asObservable();
  }

  open(id: string) {
    if (!this.dialogsState[id]) {
      this.dialogsState[id] = new BehaviorSubject<boolean>(false);
    }
    this.dialogsState[id].next(true);
  }

  close(id: string) {
    if (this.dialogsState[id]) {
      this.dialogsState[id].next(false);
    }
  }
}
