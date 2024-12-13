import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { RendererService } from './renderer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fractions.dev';
  cookieConsent: boolean = false;


  constructor(private cookieService: CookieService, private renderer: RendererService) {
  }

  onConsent() {
    this.cookieService.set('cookieConsent', 'true',{expires: 365});
    this.cookieConsent = true;
  }

  ngOnInit(): void {
    const cookieValue = this.cookieService.get('cookieConsent');
    if (cookieValue === 'true') {
      this.cookieConsent = true;
    }
    this.renderer.getTheme()
  }


}
