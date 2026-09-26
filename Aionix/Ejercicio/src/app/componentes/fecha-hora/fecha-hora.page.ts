import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonDatetime } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fecha-hora',
  templateUrl: 'fecha-hora.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonDatetime],
})
export class FechaHoraPage {
  fecha = new Date().toISOString();
}
