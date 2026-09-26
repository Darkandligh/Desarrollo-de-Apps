import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSelect, IonSelectOption } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selector',
  templateUrl: 'selector.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSelect, IonSelectOption],
})
export class SelectorPage {
  pais?: string;
}
