import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-legal-notices',
  templateUrl: './legal-notices.component.html',
  styleUrls: ['./legal-notices.component.css']
})
export class LegalNoticesComponent {
  private subscription = new Subscription();
  currentLanguage: string = 'en';

  constructor(
    private router: Router,
    private languageService: LanguageService
  ) { }

  ngOnInit(): void {
    // Détecter et définir la langue anglaise
    this.languageService.setLanguage('en');
    
    this.subscription.add(
      this.languageService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // Méthodes de navigation qui respectent la langue
  navigateToHome() {
    this.languageService.navigateInCurrentLanguage('home');
  }
  navigateToAbout() {
    this.languageService.navigateInCurrentLanguage('about');
  }

  navigateToContact() {
    this.languageService.navigateInCurrentLanguage('contact');
  }

  openTypeform() {
    window.open('https://form.typeform.com/to/Qx5yS5a2', '_blank');
  }
}
