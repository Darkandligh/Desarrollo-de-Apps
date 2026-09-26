import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonGrid, IonRow, IonCol, IonImg, IonFab,
  IonFabButton, IonIcon, IonCard, IonButton,
  IonItem, IonLabel, IonToggle, ToastController, AlertController
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { camera, trashOutline, sparkles, flashOffOutline } from 'ionicons/icons';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonGrid, IonRow, IonCol, IonImg, IonFab,
    IonFabButton, IonIcon, IonCard, IonButton,
    IonItem, IonLabel, IonToggle
  ],
  templateUrl: './gallery.page.html',
  styleUrl: './gallery.page.scss'
})
export class GalleryPage {
  public photoService = inject(PhotoService);
  private toastController = inject(ToastController);
  private alertController = inject(AlertController);

  // Señal local para el estado del interruptor de calidad
  public isHighDef = signal<boolean>(false);

  constructor() {
    addIcons({ camera, trashOutline, sparkles, flashOffOutline });
  }

  toggleQuality(enabled: boolean): void {
    this.isHighDef.set(enabled);
  }

  async takePhoto(): Promise<void> {
    const result = await this.photoService.takeNewPhoto(this.isHighDef());

    if (!result.success && result.reason === 'permission_denied') {
      await this.showPermissionWarningToast();
    } else if (!result.success && result.reason === 'error') {
      await this.showCaptureErrorAlert(result.debugMessage);
    }
  }

  async confirmDelete(index: number): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Eliminar evidencia',
      message: '¿Está seguro de que desea eliminar esta fotografía? Esta acción no se puede deshacer.',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => this.photoService.deletePhoto(index)
        }
      ]
    });

    await alert.present();
  }

  private async showPermissionWarningToast(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Permiso denegado. Conceda acceso a la cámara y galería en los ajustes del dispositivo.',
      duration: 3500,
      position: 'bottom',
      color: 'danger',
      buttons: [
        {
          text: 'Entendido',
          role: 'cancel'
        }
      ]
    });

    await toast.present();
  }

  private async showCaptureErrorAlert(debugMessage?: string): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Error al capturar la foto',
      message: 'Ocurrió un problema inesperado al acceder a la cámara o la galería. Intente nuevamente.'
        + (debugMessage ? `<br><br><small><b>Detalle técnico:</b> ${debugMessage}</small>` : ''),
      buttons: ['Entendido']
    });

    await alert.present();
  }
}
