import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  imports: [DatePipe],
  styleUrl: './character-list.css',
  templateUrl: './character-list.html',
})
export class CharacterList implements OnInit {
  private readonly characterService = inject(CharacterService);

  protected readonly characters = signal<Character[]>([]);
  protected readonly loading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly busqueda = signal('');
  protected readonly personajeSeleccionado = signal<Character | null>(null);
  protected readonly mensajeEstado = signal<string | null>(null);

  protected readonly personajesFiltrados = computed(() => {
    const termino = this.busqueda().trim().toLowerCase();
    if (!termino) {
      return this.characters();
    }
    return this.characters().filter((personaje) =>
      personaje.name.toLowerCase().includes(termino),
    );
  });

  ngOnInit(): void {
    this.fetchCharacters();
  }

  protected actualizarBusqueda(evento: Event): void {
    this.busqueda.set((evento.target as HTMLInputElement).value);
  }

  protected verDetalle(personaje: Character): void {
    this.personajeSeleccionado.set(personaje);
    this.mensajeEstado.set(null);
  }

  protected cerrarDetalle(): void {
    this.personajeSeleccionado.set(null);
    this.mensajeEstado.set(null);
  }

  protected cambiarEstado(nuevoEstado: 'Alive' | 'Dead'): void {
    const seleccionado = this.personajeSeleccionado();
    if (!seleccionado) {
      return;
    }

    if (seleccionado.status.toLowerCase() === nuevoEstado.toLowerCase()) {
      const etiqueta = nuevoEstado === 'Alive' ? 'vivo' : 'muerto';
      this.mensajeEstado.set(`${seleccionado.name} ya está ${etiqueta}.`);
      return;
    }

    const actualizado: Character = { ...seleccionado, status: nuevoEstado };
    this.characters.update((lista) =>
      lista.map((personaje) => (personaje.id === actualizado.id ? actualizado : personaje)),
    );
    this.personajeSeleccionado.set(actualizado);
    const etiqueta = nuevoEstado === 'Alive' ? 'vivo' : 'muerto';
    this.mensajeEstado.set(`${actualizado.name} ahora está ${etiqueta}.`);
  }

  protected fetchCharacters(page: number = 1): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.characterService.getCharacters(page).subscribe({
      next: (response) => {
        this.characters.set(response.results);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage.set('Hubo un error al cargar los personajes. Intente de nuevo.');
        this.loading.set(false);
      },
    });
  }
}
