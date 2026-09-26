import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'componentes',
    children: [
      {
        path: 'boton',
        loadComponent: () => import('./componentes/boton/boton.page').then((m) => m.BotonPage),
      },
      {
        path: 'insignia',
        loadComponent: () => import('./componentes/insignia/insignia.page').then((m) => m.InsigniaPage),
      },
      {
        path: 'tarjeta',
        loadComponent: () => import('./componentes/tarjeta/tarjeta.page').then((m) => m.TarjetaPage),
      },
      {
        path: 'casilla',
        loadComponent: () => import('./componentes/casilla/casilla.page').then((m) => m.CasillaPage),
      },
      {
        path: 'chip',
        loadComponent: () => import('./componentes/chip/chip.page').then((m) => m.ChipPage),
      },
      {
        path: 'fecha-hora',
        loadComponent: () => import('./componentes/fecha-hora/fecha-hora.page').then((m) => m.FechaHoraPage),
      },
      {
        path: 'fab',
        loadComponent: () => import('./componentes/fab/fab.page').then((m) => m.FabPage),
      },
      {
        path: 'icono',
        loadComponent: () => import('./componentes/icono/icono.page').then((m) => m.IconoPage),
      },
      {
        path: 'imagen',
        loadComponent: () => import('./componentes/imagen/imagen.page').then((m) => m.ImagenPage),
      },
      {
        path: 'scroll-infinito',
        loadComponent: () => import('./componentes/scroll-infinito/scroll-infinito.page').then((m) => m.ScrollInfinitoPage),
      },
      {
        path: 'input',
        loadComponent: () => import('./componentes/input/input.page').then((m) => m.InputPage),
      },
      {
        path: 'item-deslizable',
        loadComponent: () => import('./componentes/item-deslizable/item-deslizable.page').then((m) => m.ItemDeslizablePage),
      },
      {
        path: 'lista',
        loadComponent: () => import('./componentes/lista/lista.page').then((m) => m.ListaPage),
      },
      {
        path: 'carga',
        loadComponent: () => import('./componentes/carga/carga.page').then((m) => m.CargaPage),
      },
      {
        path: 'menu',
        loadComponent: () => import('./componentes/menu/menu.page').then((m) => m.MenuPage),
      },
      {
        path: 'modal',
        loadComponent: () => import('./componentes/modal/modal.page').then((m) => m.ModalPage),
      },
      {
        path: 'popover',
        loadComponent: () => import('./componentes/popover/popover.page').then((m) => m.PopoverPage),
      },
      {
        path: 'progreso',
        loadComponent: () => import('./componentes/progreso/progreso.page').then((m) => m.ProgresoPage),
      },
      {
        path: 'radio',
        loadComponent: () => import('./componentes/radio/radio.page').then((m) => m.RadioPage),
      },
      {
        path: 'rango',
        loadComponent: () => import('./componentes/rango/rango.page').then((m) => m.RangoPage),
      },
      {
        path: 'refresher',
        loadComponent: () => import('./componentes/refresher/refresher.page').then((m) => m.RefresherPage),
      },
      {
        path: 'buscador',
        loadComponent: () => import('./componentes/buscador/buscador.page').then((m) => m.BuscadorPage),
      },
      {
        path: 'segmento',
        loadComponent: () => import('./componentes/segmento/segmento.page').then((m) => m.SegmentoPage),
      },
      {
        path: 'selector',
        loadComponent: () => import('./componentes/selector/selector.page').then((m) => m.SelectorPage),
      },
      {
        path: 'esqueleto',
        loadComponent: () => import('./componentes/esqueleto/esqueleto.page').then((m) => m.EsqueletoPage),
      },
      {
        path: 'spinner',
        loadComponent: () => import('./componentes/spinner/spinner.page').then((m) => m.SpinnerPage),
      },
      {
        path: 'textarea',
        loadComponent: () => import('./componentes/textarea/textarea.page').then((m) => m.TextareaPage),
      },
      {
        path: 'toast',
        loadComponent: () => import('./componentes/toast/toast.page').then((m) => m.ToastPage),
      },
      {
        path: 'toggle',
        loadComponent: () => import('./componentes/toggle/toggle.page').then((m) => m.TogglePage),
      },
      {
        path: 'acordeon',
        loadComponent: () => import('./componentes/acordeon/acordeon.page').then((m) => m.AcordeonPage),
      },
      {
        path: 'alert',
        loadComponent: () => import('./componentes/alert/alert.page').then((m) => m.AlertPage),
      },
    ],
  },
];
