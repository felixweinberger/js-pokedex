import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiClientService } from './api-client.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];

  constructor(private apiClient: ApiClientService) { }

  ngOnInit() {
    this.apiClient.getPokemons()
      .subscribe(res => {
        this.pokemons = Array.prototype.map
          .call(res, pokemon => Pokemon.createFromObject(pokemon));
        this.filteredPokemons = this.pokemons;
      });
  }

  filterPokemons(filter) {
    this.filteredPokemons = this.pokemons
      .filter(pokemon => {
        return pokemon.name.indexOf(filter) !== -1
          || pokemon.types.some(type => type.indexOf(filter) !== -1)
          || pokemon.id === Number(filter);
      });
  }

}
