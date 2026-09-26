import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRange, IonLabel } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rango',
  templateUrl: 'rango.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRange, IonLabel],
})
export class RangoPage {
  volumen = 50;
}
