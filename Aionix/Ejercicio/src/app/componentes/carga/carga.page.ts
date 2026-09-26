import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonLoading, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-carga',
  templateUrl: 'carga.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonLoading, IonButton],
})
export class CargaPage {
  mostrarCarga = false;
}
