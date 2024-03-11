import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [MatToolbarModule, MatListModule],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  activeRoute: string ='';

  constructor(private router: Router, private route: ActivatedRoute,) {

  }

  ngOnInit() {
    console.log(this.route.snapshot.url[0].path)
    this.activeRoute = this.route.snapshot.url[0].path
  }

  onHome() {
    this.router.navigate(['/home']);
  }
    onContact() {
    this.router.navigate(['contact']);
}

}