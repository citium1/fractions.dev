import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, OnInit, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RendererService implements OnInit{
  darkTheme: boolean = false;
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit(): void {

  }


  // get darkTheme boolean from Local Storage
  getItem(darkTheme: string): string {
    return localStorage.getItem(darkTheme)
  }

  // set darkTheme boolean in local Storage
  setItem(darkTheme: string, value: boolean): void {
    localStorage.setItem(darkTheme, value.toString());
  }

  toggleTheme() {
  if (!this.darkTheme) {
    this.renderer.addClass(document.body, 'light')
      this.darkTheme = true;
    } else {
      this.renderer.removeClass(document.body, 'light')
        this.darkTheme = false;
  }
    this.setItem('darkTheme', this.darkTheme);
}

  getTheme() {
    const response = this.getItem('darkTheme')
    if (response === 'true') {
    this.renderer.addClass(document.body, 'light')
      this.darkTheme = true;
    } else {
      this.darkTheme = false;
    }
    console.log(this.darkTheme)
    return this.darkTheme;
  }

}
