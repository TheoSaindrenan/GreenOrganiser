// src/app/services/language.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

type PageType = 'home' | 'about' | 'contact';
type LanguageType = 'fr' | 'en';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<LanguageType>('fr');
  public currentLanguage$: Observable<LanguageType> = this.currentLanguageSubject.asObservable();

  // Mapping des routes selon votre architecture
  private routeMapping: Record<PageType, Record<LanguageType, string>> = {
    'home': { fr: '', en: 'en' },                    // accueil -> home
    'about': { fr: 'about', en: 'en/about' },        // a-propos -> about  
    'contact': { fr: 'contact', en: 'en/contact' }   // contact -> contact-en
  };

  constructor(private router: Router) {}

  setLanguage(language: LanguageType): void {
    console.log('Setting language to:', language);
    this.currentLanguageSubject.next(language);
  }

  getCurrentLanguage(): LanguageType {
    return this.currentLanguageSubject.value;
  }

  toggleLanguage(): void {
    const currentLang = this.getCurrentLanguage();
    const newLang: LanguageType = currentLang === 'fr' ? 'en' : 'fr';
    
    console.log('Toggling language from', currentLang, 'to', newLang);
    
    // Détecter la page courante basée sur l'URL
    const currentUrl = this.router.url;
    let currentPage: PageType = 'home';
    
    if (currentUrl.includes('contact')) {
      currentPage = 'contact';
    } else if (currentUrl.includes('about')) {
      currentPage = 'about';
    }
    
    console.log('Current page detected:', currentPage);
    
    // Changer la langue et naviguer vers la page équivalente
    this.setLanguage(newLang);
    this.navigateInCurrentLanguage(currentPage);
  }

  navigateInCurrentLanguage(page: PageType): void {
    const currentLang = this.getCurrentLanguage();
    const route = this.routeMapping[page][currentLang];
    
    console.log('Navigating to:', `/${route}`);
    this.router.navigate([route === '' ? '/' : `/${route}`]);
  }

  // Méthode pour détecter la langue depuis l'URL (optionnelle)
  detectLanguageFromUrl(): void {
    const currentUrl = this.router.url;
    if (currentUrl.startsWith('/en')) {
      this.setLanguage('en');
    } else {
      this.setLanguage('fr');
    }
  }
}