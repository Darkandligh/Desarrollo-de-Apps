import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonList,
  IonListHeader,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonNote,
  IonText,
  IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { calculatorOutline, trashOutline, timeOutline } from 'ionicons/icons';

export type Operacion = 'sumar' | 'restar' | 'multiplicar' | 'dividir';

export interface Registro {
  expresion: string;
  resultado: string;
}

const SIMBOLOS: Record<Operacion, string> = {
  sumar: '+',
  restar: '-',
  multiplicar: '×',
  dividir: '÷',
};

const MAX_HISTORIAL = 5;

@Component({
  selector: 'app-calculadora',
  templateUrl: 'calculadora.page.html',
  styleUrls: ['calculadora.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonInput,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonNote,
    IonText,
    IonIcon,
  ],
})
export class CalculadoraPage {
  constructor() {
    addIcons({ calculatorOutline, trashOutline, timeOutline });
  }

  protected readonly numero1 = signal('');
  protected readonly numero2 = signal('');
  protected readonly operacion = signal<Operacion>('sumar');

  protected readonly resultado = signal<string | null>(null);
  protected readonly error = signal<string | null>(null);
  protected readonly historial = signal<Registro[]>([]);

  protected readonly operaciones: { valor: Operacion; etiqueta: string }[] = [
    { valor: 'sumar', etiqueta: 'Sumar' },
    { valor: 'restar', etiqueta: 'Restar' },
    { valor: 'multiplicar', etiqueta: 'Multiplicar' },
    { valor: 'dividir', etiqueta: 'Dividir' },
  ];

  protected actualizarNumero1(evento: CustomEvent): void {
    this.numero1.set(((evento.detail?.value ?? '') as string));
  }

  protected actualizarNumero2(evento: CustomEvent): void {
    this.numero2.set(((evento.detail?.value ?? '') as string));
  }

  protected actualizarOperacion(evento: CustomEvent): void {
    this.operacion.set(evento.detail.value as Operacion);
  }

  protected calcular(): void {
    const a = this.aNumero(this.numero1());
    const b = this.aNumero(this.numero2());

    if (a === null || b === null) {
      this.fallar('Ingresa dos números válidos.');
      return;
    }

    const operacion = this.operacion();

    if (operacion === 'dividir' && b === 0) {
      this.fallar('No se puede dividir entre cero.');
      return;
    }

    let valor: number;
    switch (operacion) {
      case 'sumar':
        valor = a + b;
        break;
      case 'restar':
        valor = a - b;
        break;
      case 'multiplicar':
        valor = a * b;
        break;
      case 'dividir':
        valor = a / b;
        break;
    }

    if (!Number.isFinite(valor)) {
      this.fallar('El resultado no es un número válido.');
      return;
    }

    const texto = this.formatear(valor);
    this.error.set(null);
    this.resultado.set(texto);
    this.historial.update((previo) =>
      [
        {
          expresion: `${this.formatear(a)} ${SIMBOLOS[operacion]} ${this.formatear(b)}`,
          resultado: texto,
        },
        ...previo,
      ].slice(0, MAX_HISTORIAL),
    );
  }

  protected limpiar(): void {
    this.numero1.set('');
    this.numero2.set('');
    this.operacion.set('sumar');
    this.resultado.set(null);
    this.error.set(null);
  }

  protected borrarHistorial(): void {
    this.historial.set([]);
  }

  private fallar(mensaje: string): void {
    this.resultado.set(null);
    this.error.set(mensaje);
  }

  private aNumero(entrada: string): number | null {
    const limpio = entrada.trim();
    if (limpio === '') {
      return null;
    }
    const valor = Number(limpio);
    return Number.isFinite(valor) ? valor : null;
  }

  private formatear(valor: number): string {
    return Number.isInteger(valor) ? String(valor) : String(Number(valor.toFixed(6)));
  }
}
