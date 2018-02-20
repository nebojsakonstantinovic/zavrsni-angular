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
import { SingleComponent } from './pages/single/single.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CoverLetterComponent } from './pages/cover-letter/cover-letter.component';
import { Section5Component } from './templates/section5/section5.component';
import { Section6Component } from './templates/section6/section6.component';
import { NavComponent } from './templates/nav/nav.component';
import { Section7Component } from './templates/section7/section7.component';
import { Section8Component } from './templates/section8/section8.component';
import { Section11Component } from './templates/section11/section11.component';
import { Section9Component } from './templates/section9/section9.component';
import { Section10Component } from './templates/section10/section10.component';
import { Section12Component } from './templates/section12/section12.component';
import { ProjectComponent } from './templates/project/project.component';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    MainPageComponent,
    SingleComponent,
    PortfolioComponent,
    ProjectsComponent,
    ContactComponent,
    CoverLetterComponent,
    Section5Component,
    Section6Component,
    NavComponent,
    Section7Component,
    Section8Component,
    Section11Component,
    Section9Component,
    Section10Component,
    Section12Component,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCy2SusA4wzNLjcKAfnQlEXP-YjsIreHW8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
