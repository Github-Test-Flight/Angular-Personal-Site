import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-component/app.component';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
