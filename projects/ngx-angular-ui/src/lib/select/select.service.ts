import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SelectElement } from './select.component';

@Injectable({
  providedIn: 'root',
})
export class SelectService {
  private openSelect$ = new Subject<SelectElement | null>();

  setOpenSelect(select: SelectElement | null) {
    this.openSelect$.next(select);
  }

  getOpenSelect() {
    return this.openSelect$.asObservable();
  }
}
