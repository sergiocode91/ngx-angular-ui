import { Injectable, effect, signal, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {
  public darkModeSignal = signal<string>(
    window.localStorage.getItem('darkMode') || 'dark'
  );

  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    
    this.updateHtmlClass(this.darkModeSignal());

    effect(() => {
      const currentMode = this.darkModeSignal();
      window.localStorage.setItem('darkMode', currentMode);
      this.updateHtmlClass(currentMode);
    });
  }

  public toggleDarkmode() {
    this.darkModeSignal.update((value) => value === 'light' ? 'dark' : 'light');
  }

  private updateHtmlClass(mode: string) {
    const htmlElement = document.documentElement;
    if (mode === 'dark') {
      this.renderer.addClass(htmlElement, 'dark');
    } else {
      this.renderer.removeClass(htmlElement, 'dark');
    }
  }
}

