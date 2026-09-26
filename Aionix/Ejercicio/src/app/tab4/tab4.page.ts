import { Component, signal, computed } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonIcon } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  radioButtonOn,
  pricetagOutline,
  albumsOutline,
  checkboxOutline,
  pricetagsOutline,
  calendarOutline,
  addCircleOutline,
  happyOutline,
  imageOutline,
  infiniteOutline,
  createOutline,
  swapHorizontalOutline,
  listOutline,
  hourglassOutline,
  menuOutline,
  layersOutline,
  chatboxEllipsesOutline,
  statsChartOutline,
  radioOutline,
  optionsOutline,
  refreshOutline,
  searchOutline,
  gridOutline,
  chevronExpandOutline,
  bodyOutline,
  syncOutline,
  documentTextOutline,
  notificationsOutline,
  toggleOutline,
  chevronDownCircleOutline,
  alertCircleOutline,
} from 'ionicons/icons';

const COLORES = ['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger'] as const;

interface ComponenteCatalogo {
  slug: string;
  titulo: string;
  descripcion: string;
  icono: string;
  color: (typeof COLORES)[number];
}

const DATA: Omit<ComponenteCatalogo, 'color'>[] = [
  { slug: 'boton', titulo: 'Botón', descripcion: 'ion-button — Acción principal, con variantes de color y relleno.', icono: 'radio-button-on' },
  { slug: 'insignia', titulo: 'Badge', descripcion: 'ion-badge — Contador o etiqueta pequeña junto a otro elemento.', icono: 'pricetag-outline' },
  { slug: 'tarjeta', titulo: 'Card', descripcion: 'ion-card — Agrupa contenido relacionado con elevación.', icono: 'albums-outline' },
  { slug: 'casilla', titulo: 'Checkbox', descripcion: 'ion-checkbox — Selección booleana individual.', icono: 'checkbox-outline' },
  { slug: 'chip', titulo: 'Chip', descripcion: 'ion-chip — Etiqueta compacta para una entrada o acción.', icono: 'pricetags-outline' },
  { slug: 'fecha-hora', titulo: 'Datetime', descripcion: 'ion-datetime — Selector nativo de fecha y/o hora.', icono: 'calendar-outline' },
  { slug: 'fab', titulo: 'FAB', descripcion: 'ion-fab — Botón de acción flotante.', icono: 'add-circle-outline' },
  { slug: 'icono', titulo: 'Icon', descripcion: 'ion-icon — Íconos de Ionicons, coloreables.', icono: 'happy-outline' },
  { slug: 'imagen', titulo: 'Img', descripcion: 'ion-img — Carga de imágenes con lazy loading.', icono: 'image-outline' },
  { slug: 'scroll-infinito', titulo: 'Infinite Scroll', descripcion: 'ion-infinite-scroll — Carga más contenido al llegar al final.', icono: 'infinite-outline' },
  { slug: 'input', titulo: 'Input', descripcion: 'ion-input — Campo de texto de una línea.', icono: 'create-outline' },
  { slug: 'item-deslizable', titulo: 'Item Sliding', descripcion: 'ion-item-sliding — Revela acciones al deslizar un item.', icono: 'swap-horizontal-outline' },
  { slug: 'lista', titulo: 'List', descripcion: 'ion-list — Contenedor estándar para filas de ion-item.', icono: 'list-outline' },
  { slug: 'carga', titulo: 'Loading', descripcion: 'ion-loading — Overlay de operación en progreso.', icono: 'hourglass-outline' },
  { slug: 'menu', titulo: 'Menu', descripcion: 'ion-menu — Panel lateral deslizable con navegación.', icono: 'menu-outline' },
  { slug: 'modal', titulo: 'Modal', descripcion: 'ion-modal — Ventana superpuesta para tareas puntuales.', icono: 'layers-outline' },
  { slug: 'popover', titulo: 'Popover', descripcion: 'ion-popover — Menú contextual flotante.', icono: 'chatbox-ellipses-outline' },
  { slug: 'progreso', titulo: 'Progress Bar', descripcion: 'ion-progress-bar — Barra de avance de una operación.', icono: 'stats-chart-outline' },
  { slug: 'radio', titulo: 'Radio', descripcion: 'ion-radio — Selección única en un grupo de opciones.', icono: 'radio-outline' },
  { slug: 'rango', titulo: 'Range', descripcion: 'ion-range — Deslizador para un valor numérico.', icono: 'options-outline' },
  { slug: 'refresher', titulo: 'Refresher', descripcion: 'ion-refresher — Gesto de "pull to refresh".', icono: 'refresh-outline' },
  { slug: 'buscador', titulo: 'Searchbar', descripcion: 'ion-searchbar — Campo de búsqueda con estilo nativo.', icono: 'search-outline' },
  { slug: 'segmento', titulo: 'Segment', descripcion: 'ion-segment — Pestañas para alternar entre vistas.', icono: 'grid-outline' },
  { slug: 'selector', titulo: 'Select', descripcion: 'ion-select — Menú desplegable de opciones.', icono: 'chevron-expand-outline' },
  { slug: 'esqueleto', titulo: 'Skeleton Text', descripcion: 'ion-skeleton-text — Marcador animado mientras carga.', icono: 'body-outline' },
  { slug: 'spinner', titulo: 'Spinner', descripcion: 'ion-spinner — Indicador de carga circular.', icono: 'sync-outline' },
  { slug: 'textarea', titulo: 'Textarea', descripcion: 'ion-textarea — Campo de texto multilínea.', icono: 'document-text-outline' },
  { slug: 'toast', titulo: 'Toast', descripcion: 'ion-toast — Notificación breve y automática.', icono: 'notifications-outline' },
  { slug: 'toggle', titulo: 'Toggle', descripcion: 'ion-toggle — Interruptor on/off.', icono: 'toggle-outline' },
  { slug: 'acordeon', titulo: 'Accordion', descripcion: 'ion-accordion — Paneles colapsables de contenido.', icono: 'chevron-down-circle-outline' },
  { slug: 'alert', titulo: 'Alert', descripcion: 'ion-alert — Diálogo que interrumpe para confirmar o avisar algo importante.', icono: 'alert-circle-outline' },
];

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    RouterLink,
  ],
})
export class Tab4Page {
  protected readonly termino = signal('');

  protected readonly componentes: ComponenteCatalogo[] = DATA.map((c, i) => ({
    ...c,
    color: COLORES[i % COLORES.length],
  }));

  protected readonly filtrados = computed(() => {
    const q = this.termino().trim().toLowerCase();
    if (!q) return this.componentes;
    return this.componentes.filter(
      (c) => c.titulo.toLowerCase().includes(q) || c.descripcion.toLowerCase().includes(q),
    );
  });

  constructor() {
    addIcons({
      radioButtonOn,
      pricetagOutline,
      albumsOutline,
      checkboxOutline,
      pricetagsOutline,
      calendarOutline,
      addCircleOutline,
      happyOutline,
      imageOutline,
      infiniteOutline,
      createOutline,
      swapHorizontalOutline,
      listOutline,
      hourglassOutline,
      menuOutline,
      layersOutline,
      chatboxEllipsesOutline,
      statsChartOutline,
      radioOutline,
      optionsOutline,
      refreshOutline,
      searchOutline,
      gridOutline,
      chevronExpandOutline,
      bodyOutline,
      syncOutline,
      documentTextOutline,
      notificationsOutline,
      toggleOutline,
      chevronDownCircleOutline,
      alertCircleOutline,
    });
  }

  protected buscar(evento: CustomEvent): void {
    this.termino.set(((evento.detail?.value ?? '') as string));
  }
}
