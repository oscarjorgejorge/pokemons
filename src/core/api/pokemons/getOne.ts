import _ from "lodash";
import Http from "@/utils/http";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import { getPokemonAbility } from "../abilities";
import { getPokemonSpecie } from "../pokemon_species";
import { getPokemonEvolutionChain } from "../evolutions";
import { IPokemonEvolution } from "@/core/interfaces/pokemon_evolution.model";

async function setEvolutions(evolutionChain: IPokemonEvolution) {
  const evolutions = [];
  let currentEvolution = evolutionChain.chain;

  while (currentEvolution) {
    const evolutionName = currentEvolution.species.name;
    const { data: pokemonEvolution } = await Http.get<IPokemon>(
      `/pokemon/${evolutionName}`,
    );

    evolutions.push(
      _.pick(pokemonEvolution, [
        "id",
        "name",
        "stats",
        "types",
        "sprites.front_default",
        "sprites.other.showdown.front_default",
        "sprites.other.home.front_default",
      ]),
    );
    currentEvolution = currentEvolution.evolves_to[0];
  }

  return evolutions;
}

export async function getOnePokemon(url: string) {
  try {
    const { data: pokemon } = await Http.get<
      Partial<IPokemon> & { id: string }
    >(url);

    const generation = await getPokemonAbility(pokemon.id);

    const { data: pokemonSpecies } = await getPokemonSpecie(pokemon.id);

    const { data: evolutionChain } = await getPokemonEvolutionChain(
      pokemonSpecies.evolution_chain.url,
    );

    const evolutions = await setEvolutions(evolutionChain);

    return {
      ..._.pick(pokemon, [
        "id",
        "name",
        "types",
        "stats",
        "sprites.front_default",
        "sprites.back_default",
        "sprites.other.showdown.front_default",
        "sprites.other.home.front_default",
      ]),
      generation,
      evolutions,
    } as IPokemon;
  } catch (error) {
    throw new Error("Error getting pokemon");
  }
}
