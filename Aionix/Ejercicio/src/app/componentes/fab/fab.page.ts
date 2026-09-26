import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonFab, IonFabButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

@Component({
  selector: 'app-fab',
  templateUrl: 'fab.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonFab, IonFabButton, IonIcon],
})
export class FabPage {
  constructor() {
    addIcons({ add });
  }
}
