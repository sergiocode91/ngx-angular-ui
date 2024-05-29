import { Injectable, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  public darkModeSignal = signal<string>(
    window.localStorage.getItem('darkMode') || 'dark'
  );

  public toggleDarkmode() {
    this.darkModeSignal.update((value) => value === 'light' ? 'dark' : 'light');
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', this.darkModeSignal());
    });
  }
}
