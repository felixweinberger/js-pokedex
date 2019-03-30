import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';

import { ApiClientService } from '../api-client.service';
import { PokemonPreview } from '../pokemon-preview';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges {
  @Input()
  filterString: string;

  pokemonList: PokemonPreview[];
  originalList: PokemonPreview[];

  @Output()
  cardClicked = new EventEmitter<PokemonPreview>();

  constructor(private apiClient: ApiClientService) {}

  ngOnChanges() {
    if (this.originalList !== undefined && this.pokemonList !== undefined) {
      this.filterPokemonList();
    }
  }

  filterPokemonList() {
    this.pokemonList = this.originalList.filter(pokemon => {
      return (
        pokemon.name.indexOf(this.filterString) !== -1
        || pokemon.types.some(type => type.indexOf(this.filterString) !== -1)
        // || pokemon.abilities.some(ability => ability.indexOf(this.filterString) !== -1)
        // || pokemon.moves.some(move => move.indexOf(this.filterString) !== -1)
      );
    });
  }

  onClick(id) {
    this.cardClicked.emit((this.originalList.find(pokemon => {
      return pokemon.id === id;
    })));
  }

  ngOnInit() {
    this.apiClient.gottaCatchEmAll().then((res) => {
      this.pokemonList = res;
      this.originalList = res;
    });
  }

}
