import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages-en/home/home.component';
import { AboutComponent } from './pages-en/about/about.component';
import { ContactEnComponent } from './pages-en/contact-en/contact-en.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'about', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'en', component: HomeComponent },
  { path: 'en/about', component: AboutComponent },
  { path: 'en/contact', component: ContactEnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }