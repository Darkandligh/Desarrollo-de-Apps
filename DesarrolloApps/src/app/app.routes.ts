import { Routes } from '@angular/router';
import { Formulario } from './paginas/formulario/formulario';
import { CharacterList } from './components/character-list/character-list';

export const routes: Routes = [
  { path: '', component: Formulario },
  { path: 'personajes', component: CharacterList },
];
