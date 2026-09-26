import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonList } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-deslizable',
  templateUrl: 'item-deslizable.page.html',
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption, IonList],
})
export class ItemDeslizablePage {
  contactos = ['Ana', 'Luis', 'María'];

  eliminar(nombre: string) {
    this.contactos = this.contactos.filter((c) => c !== nombre);
  }
}
