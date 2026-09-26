import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-boton',
  templateUrl: 'boton.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonButton],
})
export class BotonPage {
  mensaje = '';
}
