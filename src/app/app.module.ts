import { NgModule, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { CommonModule } from '@angular/common';
import { RendererService } from './renderer.service';

@NgModule({
  declarations: [AppComponent],
  providers: [ RendererService],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactComponent,
    BrowserAnimationsModule,
    CommonModule,
    HomeComponent,
    ContactComponent,
    ErrorComponent,
  ],
})
export class AppModule {}
