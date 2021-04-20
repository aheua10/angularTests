import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { ContactFormComponent } from './components/contactForm/contact-form.component';
import { ApiFetchButtonComponent } from './components/api-fetch-button/api-fetch-button.component'
import { ApiServiceService } from './components/api-service.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactFormComponent,
    ApiFetchButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ApiServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
