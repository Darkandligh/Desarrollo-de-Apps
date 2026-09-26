import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonBadge, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-insignia',
  templateUrl: 'insignia.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonBadge, IonButton],
})
export class InsigniaPage {
  contador = 0;
}
