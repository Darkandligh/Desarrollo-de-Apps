import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSearchbar, IonList, IonItem, IonLabel } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  templateUrl: 'buscador.page.html',
  imports: [FormsModule, CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonSearchbar, IonList, IonItem, IonLabel],
})
export class BuscadorPage {
  termino = '';
  frutas = ['Manzana', 'Banana', 'Naranja', 'Pera', 'Uva'];

  get filtradas() {
    return this.frutas.filter((f) => f.toLowerCase().includes(this.termino.toLowerCase()));
  }
}
