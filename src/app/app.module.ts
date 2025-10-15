import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages-en/home/home.component';
import { AboutComponent } from './pages-en/about/about.component';
import { ContactEnComponent } from './pages-en/contact-en/contact-en.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';
import { CguFrComponent } from './pages/cgu-fr/cgu-fr.component';
import { MentionsLegalesComponent } from './pages/mentions-legales/mentions-legales.component';
import { PolitiqueConfidentialiteComponent } from './pages/politique-confidentialite/politique-confidentialite.component';
import { CgvFrComponent } from './pages/cgv-fr/cgv-fr.component';
import { CguEnComponent } from './pages-en/cgu-en/cgu-en.component';
import { CgvEnComponent } from './pages-en/cgv-en/cgv-en.component';
import { LegalNoticesComponent } from './pages-en/legal-notices/legal-notices.component';
import { PrivacyPolicyComponent } from './pages-en/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AProposComponent,
    ContactComponent,
    HomeComponent,
    AboutComponent,
    ContactEnComponent,
    LanguageSwitcherComponent,
    CguFrComponent,
    MentionsLegalesComponent,
    PolitiqueConfidentialiteComponent,
    CgvFrComponent,
    CguEnComponent,
    CgvEnComponent,
    LegalNoticesComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
