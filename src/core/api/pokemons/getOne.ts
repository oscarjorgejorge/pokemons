import _ from "lodash";
import Http from "@/utils/http";
import { IPokemon, IPokemonCard } from "@/core/interfaces/pokemon.model";
import { getPokemonAbility } from "../abilities";
import { getPokemonSpecie } from "../pokemon_species";
import { getPokemonEvolutionChain } from "../evolutions";
import { IPokemonEvolution } from "@/core/interfaces/pokemon_evolution.model";

async function setEvolutions(
  evolutionChain: IPokemonEvolution,
  fields: string[],
) {
  const evolutions = [];
  let currentEvolution = evolutionChain.chain;

  while (currentEvolution) {
    const evolutionName = currentEvolution.species.name;
    const { data: pokemonEvolution } = await Http.get<IPokemon>(
      `/pokemon/${evolutionName}`,
    );

    evolutions.push(_.pick(pokemonEvolution, fields));
    currentEvolution = currentEvolution.evolves_to[0];
  }

  return evolutions;
}

async function getPokemon(url: string, fields: string[]) {
  try {
    const { data: pokemon } = await Http.get(url);

    const generation = await getPokemonAbility(pokemon.id);

    const { data: pokemonSpecies } = await getPokemonSpecie(pokemon.id);

    const { data: evolutionChain } = await getPokemonEvolutionChain(
      pokemonSpecies.evolution_chain.url,
    );

    const evolutions = await setEvolutions(evolutionChain, fields);

    const data = {
      ..._.pick(pokemon, fields),
      generation,
      evolutions,
    };

    return data;
  } catch (error) {
    throw new Error("Error getting pokemon");
  }
}

export async function getOnePokemonCard(url: string) {
  const fields = [
    "id",
    "name",
    "types",
    "sprites.front_default",
    "sprites.back_default",
    "sprites.other.home.front_default",
  ];

  return getPokemon(url, fields) as Promise<IPokemonCard>;
}

export async function getOnePokemon(url: string) {
  const fields = [
    "id",
    "name",
    "types",
    "stats",
    "sprites.other.showdown.front_default",
    "sprites.other.home.front_default",
  ];

  return getPokemon(url, fields) as Promise<IPokemon>;
}
