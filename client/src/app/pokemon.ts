/* tslint:disable */

export class Pokemon {
  forms: any[];
  abilities: any[];
  stats: any[];
  name: string;
  weight: number;
  moves: any[];
  sprites: {};
  held_items: any[];
  location_area_encounters: string;
  height: number;
  is_default: true;
  species: {};
  id: number;
  order: number;
  game_indices: any[];
  base_experience: number;
  types: any[];

  static parse(obj) {
    return Object.assign(new Pokemon(), obj);
  }
}
