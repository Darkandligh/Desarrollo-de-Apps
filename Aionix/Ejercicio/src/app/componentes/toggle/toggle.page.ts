import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonToggle } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: 'toggle.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonToggle],
})
export class TogglePage {
  notificaciones = true;
}
