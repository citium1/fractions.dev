import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
   // { path: 'not-found', component: PageNotFoundComponent },
  {
    path: 'not-found',
    component: ErrorComponent,
    data: { message: 'Page not found!' },
  },
  { path: '**', redirectTo: '/not-found' },
  // { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
