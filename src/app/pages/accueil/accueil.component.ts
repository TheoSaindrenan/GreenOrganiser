import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {

  constructor(private router: Router) { }

  navigateToAPropos() {
    this.router.navigate(['/a-propos']);
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }

  openTypeform() {
    window.open('https://form.typeform.com/to/YwyF5A2R', '_blank');
  }
}