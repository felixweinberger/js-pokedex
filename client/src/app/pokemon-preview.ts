interface Sprites {
  back_female: string | null;
  back_shiny_female: string | null;
  back_default: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_shiny: string | null;
  front_default: string | null;
  front_shiny: string | null;
}

export class PokemonPreview {
  name: string;
  id: number;
  sprites: Sprites;
  abilities: string[];
  weight: number;
  moves: string[];
  types: string[];
  gif: string;

  get sprite() {
    return this.sprites.front_default;
  }

  get cry() {
    return 'sound/' + String(this.id).padStart(3, '0') + '.wav';
  }

  static parse(pokemon) {
    const pokePreview = Object.assign(new PokemonPreview(), pokemon);
    const name = pokemon.name.replace('-', '');
    pokePreview.gif = `http://www.pokestadium.com/sprites/xy/${name}.gif`;
    return pokePreview;
  }
}
