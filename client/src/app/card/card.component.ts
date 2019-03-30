import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PokemonPreview } from '../pokemon-preview';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output()
  selectedPokemon = new EventEmitter<number>();

  @Input()
  pokemon: PokemonPreview;

  cardClicked() {
    this.selectedPokemon.emit(this.pokemon.id);
  }

  constructor() {}

}
