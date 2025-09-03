// contact.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
  formData = {
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  };

  showSuccessMessage = false;

  constructor(private router: Router) { }

  navigateToAccueil() {
    this.router.navigate(['']);
  }

  navigateToAPropos() {
    this.router.navigate(['/a-propos']);
  }

  openTypeform() {
    window.open('https://form.typeform.com/to/YwyF5A2R', '_blank');
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.sendEmail();
    }
  }

  private sendEmail() {
    // Créer le corps de l'email
    const emailBody = this.createEmailBody();
    
    // Créer l'objet du message
    const subject = `Nouveau message de contact - ${this.formData.prenom} ${this.formData.nom}`;
    
    // Créer le lien mailto
    const mailtoLink = `mailto:contact@greenorganizer.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Ouvrir le client email
    window.location.href = mailtoLink;
    
    // Afficher le message de succès
    this.showSuccessMessage = true;
    
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      this.resetForm();
      this.showSuccessMessage = false;
    }, 3000);
  }

  private createEmailBody(): string {
    let body = `Nouveau message de contact depuis le site Green Organizer\n\n`;
    body += `Informations du contact :\n`;
    body += `- Nom : ${this.formData.nom}\n`;
    body += `- Prénom : ${this.formData.prenom}\n`;
    body += `- Email : ${this.formData.email}\n`;
    
    // Ajouter le téléphone seulement s'il est rempli
    if (this.formData.telephone.trim()) {
      body += `- Téléphone : ${this.formData.telephone}\n`;
    }
    
    body += `\nMessage :\n`;
    body += `${this.formData.message}\n\n`;
    body += `---\n`;
    body += `Message envoyé depuis le formulaire de contact du site Green Organizer`;
    
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