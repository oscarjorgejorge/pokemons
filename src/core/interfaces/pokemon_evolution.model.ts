interface EvolutionChain {
  evolves_to: EvolutionChain[];
  species: {
    name: string;
    url: string;
  };
}

export interface IPokemonEvolution {
  chain: EvolutionChain;
}
