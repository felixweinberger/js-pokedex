export class Pokemon {
  id: number;
  name: string;
  sprite: string;
  weight: number;
  baseExp: number;
  moves: string[];
  abilities: string[];
  types: string[];

  static createFromObject(obj) {
    return Object.assign(new Pokemon(), obj);
  }
}
