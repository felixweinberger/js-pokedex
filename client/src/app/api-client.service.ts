import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon';
import { PokemonPreview } from './pokemon-preview';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  constructor() { }

  gottaCatchEmAll() {
    return fetch('/pokemons')
      .then(res => res.json())
      .then(res => res.map(PokemonPreview.parse));
  }

  catchOne(pokemonId) {
    return fetch('/pokemons/' + pokemonId)
      .then(res => res.json());
  }
}
