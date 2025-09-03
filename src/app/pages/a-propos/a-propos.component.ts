import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-propos',
  templateUrl: './a-propos.component.html',
  styleUrls: ['./a-propos.component.css']
})
export class AProposComponent {

  constructor(private router: Router) { }

  navigateToAccueil() {
    this.router.navigate(['']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  openTypeform() {
    // Ouvre le formulaire Typeform dans un nouvel onglet
    window.open('https://form.typeform.com/to/YwyF5A2R', '_blank');
  }
}