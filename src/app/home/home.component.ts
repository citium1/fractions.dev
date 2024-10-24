import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { RendererService } from '../renderer.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatSlideToggleModule, FormsModule, MatListModule, MatButtonModule, ContactComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  lightTheme: boolean;

   activeRoute: string ='';

    menu: string[] = ['About', 'Contact', 'Apps'];

  constructor( private router: Router, private route: ActivatedRoute, private renderer: RendererService) {
  }

  ngOnInit() {
    this.activeRoute = this.route.snapshot.url[0].path
    this.getTheme()
  }

  onContact() {
    this.router.navigate(['contact']);
  }
  onAbout() {
    this.router.navigate(['about'])
  }
 onApps() {
    this.router.navigate(['apps'])
 }

  getTheme() {
    this.lightTheme = this.renderer.getTheme()
  }
  onToggle() {
    this.renderer.toggleTheme();
        this.getTheme()

  }

}
