import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSegment, IonSegmentButton, IonLabel } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-segmento',
  templateUrl: 'segmento.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSegment, IonSegmentButton, IonLabel],
})
export class SegmentoPage {
  vista = 'lista';
}
