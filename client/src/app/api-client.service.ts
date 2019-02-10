import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  pokemonURL = '/pokemon';

  constructor(private http: HttpClient) { }

  getPokemons() {
    return this.http.get(this.pokemonURL);
  }

  getPokemon(id) {
    return this.http.get(this.pokemonURL + '/' + String(id));
  }

}
