import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonInput } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonInput],
})
export class InputPage {
  nombre = '';
}
