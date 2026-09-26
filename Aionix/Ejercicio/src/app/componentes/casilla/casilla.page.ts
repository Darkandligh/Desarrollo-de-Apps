import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCheckbox } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-casilla',
  templateUrl: 'casilla.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonCheckbox],
})
export class CasillaPage {
  aceptado = false;
}
