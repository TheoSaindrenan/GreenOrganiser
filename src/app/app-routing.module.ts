import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages-en/home/home.component';
import { AboutComponent } from './pages-en/about/about.component';
import { ContactEnComponent } from './pages-en/contact-en/contact-en.component';
import { CguEnComponent } from './pages-en/cgu-en/cgu-en.component';
import { CgvEnComponent } from './pages-en/cgv-en/cgv-en.component';
import { CguFrComponent } from './pages/cgu-fr/cgu-fr.component';
import { CgvFrComponent } from './pages/cgv-fr/cgv-fr.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { LegalNoticesComponent } from './pages-en/legal-notices/legal-notices.component';
import { PrivacyPolicyComponent } from './pages-en/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'about', component: AProposComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'en', component: HomeComponent },
  { path: 'en/about', component: AboutComponent },
  { path: 'en/contact', component: ContactEnComponent },
  { path: 'cgv-fr', component: CgvFrComponent },
  { path: 'cgv-en', component: CgvEnComponent },
  { path: 'cgu-fr', component: CguFrComponent },
  { path: 'cgu-en', component: CguEnComponent },
  { path: 'mentions-legales', component: MentionsLegalesComponent },
  { path: 'politique-confidentialite', component: PolitiqueConfidentialiteComponent },
  { path: 'legal-notices', component: LegalNoticesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top', // 🔹 Toujours revenir en haut de la page
      anchorScrolling: 'enabled',       // 🔹 Active le scroll vers les ancres (#)
      scrollOffset: [0, 0]              
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
