import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonToast, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: 'toast.page.html',
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonToast, IonButton],
})
export class ToastPage {
  mostrarToast = false;
}
