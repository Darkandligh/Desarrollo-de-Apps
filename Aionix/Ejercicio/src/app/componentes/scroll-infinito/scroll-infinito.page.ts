import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonItem, IonLabel } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-infinito',
  templateUrl: 'scroll-infinito.page.html',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonItem, IonLabel],
})
export class ScrollInfinitoPage {
  items = Array.from({ length: 20 }, (_, i) => i + 1);

  cargarMas(event: any) {
    setTimeout(() => {
      const ultimo = this.items[this.items.length - 1];
      this.items.push(...Array.from({ length: 20 }, (_, i) => ultimo + i + 1));
      event.target.complete();
      if (this.items.length >= 100) {
        event.target.disabled = true;
      }
    }, 500);
  }
}
