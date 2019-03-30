import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { PokemonPreview } from './pokemon-preview';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filterString: string;
  pokemon: PokemonPreview;

  constructor(private apiClient: ApiClientService) {}

  searchChange(event) {
    this.filterString = event;
  }

  selectPokemon(event) {
    this.pokemon = event;
  }

  unselectPokemon(event) {
    this.pokemon = event;
  }

  ngOnInit() {
  }
}
