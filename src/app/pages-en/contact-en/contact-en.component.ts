import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact-en',
  templateUrl: './contact-en.component.html',
  styleUrls: ['./contact-en.component.css']
})
export class ContactEnComponent implements OnInit, OnDestroy {
  
  private subscription = new Subscription();
  currentLanguage: string = 'en';

  formData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  };

  showSuccessMessage = false;

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

  // Navigation qui respecte la langue courante
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

  onSubmit() {
    if (this.isFormValid()) {
      this.sendEmail();
    }
  }

  private sendEmail() {
    const emailBody = this.createEmailBody();
    const subject = `New contact message - ${this.formData.prenom} ${this.formData.nom}`;
    const mailtoLink = `mailto:contact@greenorganizer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
    this.showSuccessMessage = true;
    
    setTimeout(() => {
      this.resetForm();
      this.showSuccessMessage = false;
    }, 3000);
  }

  private createEmailBody(): string {
    let body = `New contact message from Green Organizer website\n\n`;
    body += `Contact information:\n`;
    body += `- Last Name: ${this.formData.nom}\n`;
    body += `- First Name: ${this.formData.prenom}\n`;
    body += `- Email: ${this.formData.email}\n`;
    
    if (this.formData.telephone.trim()) {
      body += `- Phone: ${this.formData.telephone}\n`;
    }
    
    body += `\nMessage:\n`;
    body += `${this.formData.message}\n\n`;
    body += `---\n`;
    body += `Message sent from Green Organizer website contact form`;
    
    return body;
  }

  private isFormValid(): boolean {
    return !!(
      this.formData.nom.trim() &&
      this.formData.prenom.trim() &&
      this.formData.email.trim() &&
      this.isValidEmail(this.formData.email) &&
      this.formData.message.trim()
    );
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private resetForm() {
    this.formData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      message: ''
    };
  }
}