import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  templateUrl: './apps.component.html',
  styleUrl: './apps.component.css'
})
export class AppsComponent {

   activeRoute: string ='';

  constructor(private router: Router, private route: ActivatedRoute,) {
    this.activeRoute = this.route.snapshot.url[0].path

  }


  onHome() {
    this.router.navigate(['/home']);
  }
  onContact() {
    this.router.navigate(['/contact']);

}

}
