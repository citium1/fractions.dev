import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatToolbarModule, MatListModule, MatButtonModule, RouterModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

 activeRoute: string ='';

  constructor(private router: Router, private route: ActivatedRoute,) {
    this.activeRoute = this.route.snapshot.url[0].path

  }

  onContact() {
        this.router.navigate(['/contact']);

  }

  onHome() {
    this.router.navigate(['/home']);
  }

}
