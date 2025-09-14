import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { NgForm } from '@angular/forms';

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
    // Détecter et définir la langue française
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

  navigateToAbout() {
    this.languageService.navigateInCurrentLanguage('about');
  }

  openTypeform() {
    window.open('https://form.typeform.com/to/Qx5yS5a2', '_blank');
  }

  onSubmit(contactForm: NgForm) {
    if (this.isFormValid()) {
      this.sendEmail(contactForm);
    }
  }

  private sendEmail(contactForm: NgForm) {
    emailjs.send(
      'service_85mulub',   
      'template_sfpc6bk',  
      {
        nom: this.formData.nom,
        prenom: this.formData.prenom,
        email: this.formData.email,
        telephone: this.formData.telephone,
        message: this.formData.message,
        to_email: 'contact@greenorganiser.com'
      },
      '3lvV7f_SBhmZwqkv_'
    )
    .then((result: EmailJSResponseStatus) => {
      console.log('SUCCESS!', result.text);
      this.showSuccessMessage = true;

      // Réinitialiser le formulaire et l’état de validation
      this.resetForm(contactForm);

      // Redirection après un petit délai pour voir le message
      setTimeout(() => {
        this.showSuccessMessage = false;
        this.navigateToHome();
      }, 3000);
      
    }, (error) => {
      console.error('FAILED...', error.text);
      alert('Erreur lors de l’envoi du message, veuillez réessayer.');
    });
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

  private resetForm(contactForm: NgForm) {
    this.formData = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      message: ''
    };


    contactForm.resetForm();
  }
}
