import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, star, home } from 'ionicons/icons';

@Component({
  selector: 'app-icono',
  templateUrl: 'icono.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonIcon],
})
export class IconoPage {
  constructor() {
    addIcons({ heart, star, home });
  }
}
