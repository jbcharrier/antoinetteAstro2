import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { QuiSuisJeComponent } from './components/main/qui-suis-je/qui-suis-je.component';
import { ConsultationComponent } from './components/main/consultation/consultation.component';
import { ContactComponent } from './components/main/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    QuiSuisJeComponent,
    ConsultationComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
