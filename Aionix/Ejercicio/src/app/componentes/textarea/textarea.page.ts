import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonTextarea } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: 'textarea.page.html',
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonTextarea],
})
export class TextareaPage {
  comentario = '';
}
