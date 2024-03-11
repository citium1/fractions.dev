import { style } from '@angular/animations';
import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatSlideToggleModule, FormsModule, MatListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lightTheme = false;

   activeRoute: string ='';

    menu: string[] = ['About', 'Contact', 'Apps'];

  constructor(private renderer: Renderer2, private router: Router, private route: ActivatedRoute, private contact: ContactComponent) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.url[0].path)
    this.activeRoute = this.route.snapshot.url[0].path
        this.contact.setTheme(this.lightTheme)

  }

  onContact() {
    this.router.navigate(['contact']);
}

  onToggle() {
    if (this.lightTheme === false) {
      this.renderer.addClass(document.body, 'light')
      this.lightTheme = true;
    } else {
      this.renderer.removeClass(document.body, 'light')
                this.lightTheme = false;

    }
    this.contact.setTheme(this.lightTheme)
  }


}
