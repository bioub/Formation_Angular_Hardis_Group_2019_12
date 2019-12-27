import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { ContactUsComponent } from './core/contact-us/contact-us.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TopBarComponent } from './core/top-bar/top-bar.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    NotFoundComponent,
    TopBarComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule, // en dernier car route **
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
