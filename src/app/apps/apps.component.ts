import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [MatToolbarModule],
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


}
