import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsideComponent } from './templates/aside/aside.component';
import { AppRoutingModule } from './/app-routing.module';
import { Section1Component } from './templates/section1/section1.component';
import { Section2Component } from './templates/section2/section2.component';
import { Section3Component } from './templates/section3/section3.component';
import { Section4Component } from './templates/section4/section4.component';
import { MainPageComponent } from './pages/main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
