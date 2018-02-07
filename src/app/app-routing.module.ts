import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CoverLetterComponent } from './pages/cover-letter/cover-letter.component';
import { SingleComponent } from './pages/single/single.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';


 const routes: Routes = [
  { path: '', redirectTo: 'main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'cover-letter', component: CoverLetterComponent },
  { path: 'single', component: SingleComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'projects', component: ProjectsComponent}
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
