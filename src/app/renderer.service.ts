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

  // get lightTheme boolean from Local Storage
  getItem(lightTheme: string): string {
    return localStorage.getItem(lightTheme)
  }

  // set lightTheme boolean in local Storage
  setItem(lightTheme: string, value: boolean): void {
    localStorage.setItem(lightTheme, value.toString());
  }



  toggleTheme() {
  if (!this.lightTheme) {
    this.renderer.addClass(document.body, 'light')
      this.lightTheme = true;
    } else {
      this.renderer.removeClass(document.body, 'light')
        this.lightTheme = false;
  }
    this.setItem('lightTheme', this.lightTheme);
}

  getTheme() {
    const response = this.getItem('lightTheme')
    console.log(response + " current value");
    if (response === 'true') {
      this.lightTheme = true;
    } else {
      this.lightTheme = false;
    }
        console.log(this.lightTheme + " current value");

    return this.lightTheme;
  }

}
