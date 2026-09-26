import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRadioGroup, IonRadio, IonList, IonItem } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: 'radio.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRadioGroup, IonRadio, IonList, IonItem],
})
export class RadioPage {
  nivel = 'principiante';
}
