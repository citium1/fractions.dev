import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererService {
  lightTheme: boolean = false;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
  if (!this.lightTheme) {
      this.renderer.addClass(document.body, 'light')
      this.lightTheme = true;
    } else {
      this.renderer.removeClass(document.body, 'light')
                this.lightTheme = false;

    }
}

  getTheme() {
    return this.lightTheme;
  }

}
