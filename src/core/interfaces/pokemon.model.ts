export interface IPokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface IPokemon {
  id: string;
  name: string;
  url: string;
  types: IPokemonType[];
  generation: string;
  sprites: {
    front_default: string;
    other: {
      showdown: {
        front_default: string;
      };
    };
  };
  evolutions: IPokemon[];
  stats: PokemonStat[];
}
