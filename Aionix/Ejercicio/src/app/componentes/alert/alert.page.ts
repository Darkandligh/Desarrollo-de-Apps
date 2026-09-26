import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonAlert, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: 'alert.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonAlert, IonButton],
})
export class AlertPage {
  mostrarAlert = false;

  botones = [
    { text: 'Cancelar', role: 'cancel' },
    { text: 'Aceptar', role: 'confirm' },
  ];
}
