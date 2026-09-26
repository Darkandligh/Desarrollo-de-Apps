import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonChip, IonLabel, IonIcon } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { closeCircle } from 'ionicons/icons';

@Component({
  selector: 'app-chip',
  templateUrl: 'chip.page.html',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonChip, IonLabel, IonIcon],
})
export class ChipPage {
  visible = true;

  constructor() {
    addIcons({ closeCircle });
  }
}
