import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonProgressBar, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-progreso',
  templateUrl: 'progreso.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonProgressBar, IonButton],
})
export class ProgresoPage {
  progreso = 0.3;

  avanzar() {
    this.progreso = Math.min(1, this.progreso + 0.1);
  }
}
