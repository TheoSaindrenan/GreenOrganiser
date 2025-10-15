import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-politique-confidentialite',
  templateUrl: './politique-confidentialite.component.html',
  styleUrls: ['./politique-confidentialite.component.css']
})
export class PolitiqueConfidentialiteComponent {
    private subscription = new Subscription();
    currentLanguage: string = 'fr';
  
      constructor(
        private router: Router,
        private languageService: LanguageService
      ) { }
  
      ngOnInit(): void {
        // Détecter et définir la langue française
        this.languageService.setLanguage('fr');
        
        this.subscription.add(
          this.languageService.currentLanguage$.subscribe(lang => {
            this.currentLanguage = lang;
          })
        );
      }
    // Méthodes de navigation qui respectent la langue
  
    navigateToAccueil() {
      this.languageService.navigateInCurrentLanguage('home');
    }
    navigateToAPropos() {
      this.languageService.navigateInCurrentLanguage('about');
    }
  
    navigateToContact() {
      this.languageService.navigateInCurrentLanguage('contact');
    }
  
    openTypeform() {
      window.open('https://form.typeform.com/to/YwyF5A2R', '_blank');
    }
  }
