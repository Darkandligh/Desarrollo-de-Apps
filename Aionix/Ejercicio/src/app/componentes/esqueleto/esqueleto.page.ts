import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSkeletonText, IonItem, IonLabel, IonAvatar, IonButton } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esqueleto',
  templateUrl: 'esqueleto.page.html',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSkeletonText, IonItem, IonLabel, IonAvatar, IonButton],
})
export class EsqueletoPage {
  cargando = true;
}
