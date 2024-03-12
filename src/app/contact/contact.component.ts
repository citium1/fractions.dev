import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  theme: boolean;
  activeRoute: string ='';

  constructor(private router: Router, private route: ActivatedRoute,) {

  }

  ngOnInit() {
    this.activeRoute = this.route.snapshot.url[0].path
  }

  // setTheme(x: boolean) {
  //   this.theme = x;
  //   console.log(this.theme)
  // }

  onHome() {
    this.router.navigate(['/home']);
  }

}
