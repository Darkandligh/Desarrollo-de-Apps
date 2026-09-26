import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRefresher, IonRefresherContent, IonList, IonItem, IonLabel } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refresher',
  templateUrl: 'refresher.page.html',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonRefresher, IonRefresherContent, IonList, IonItem, IonLabel],
})
export class RefresherPage {
  items = ['Elemento A', 'Elemento B', 'Elemento C'];

  refrescar(event: any) {
    setTimeout(() => {
      this.items = ['Elemento actualizado', ...this.items];
      event.target.complete();
    }, 1000);
  }
}
