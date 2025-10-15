import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit, OnDestroy {

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
  
  navigateToHome() {
    this.languageService.navigateInCurrentLanguage('home');
  }

  navigateToContact() {
    this.languageService.navigateInCurrentLanguage('contact');
  }

  openTypeform() {
    window.open('https://form.typeform.com/to/Qx5yS5a2', '_blank');
  }
}

