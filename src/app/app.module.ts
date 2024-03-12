import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent,],
  providers: [HomeComponent, ContactComponent, ErrorComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    ContactComponent,
    BrowserAnimationsModule,
    CommonModule
  ],
})
export class AppModule {}
