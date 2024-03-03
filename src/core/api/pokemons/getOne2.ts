import { IPokemon } from "@/core/interfaces/pokemon.model";
import _ from "lodash";
import Http from "@/utils/http";
import { getPokemonAbility } from "../abilities";

export async function getOnePokemonVersion2(url: string) {
  console.log(typeof url);
  console.log(url);
  try {
    const { data: pokemon } = await Http.get<IPokemon>(url);
    console.log("hello");

    const generation = await getPokemonAbility(pokemon.id);
    console.log("hello0");

    const { data: pokemonSpecies } = await Http.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`,
    );
    console.log("hello1");

    const { data: evolutionChain } = await Http.get(
      pokemonSpecies.evolution_chain.url,
    );
    console.log("hello2");

    const evolutions = [];
    let currentEvolution = evolutionChain.chain;
    while (currentEvolution) {
      const evolutionName = currentEvolution.species.name;
      const { data: pokemonEvolution } = await Http.get<IPokemon>(
        `https://pokeapi.co/api/v2/pokemon/${evolutionName}`,
      );

      evolutions.push(
        _.pick(pokemonEvolution, [
          "id",
          "name",
          "types",
          "sprites.front_default",
          "sprites.other.showdown.front_default",
        ]),
      );
      currentEvolution = currentEvolution.evolves_to[0];
    }

    return {
      ..._.pick(pokemon, [
        "id",
        "name",
        "types",
        "sprites.front_default",
        "sprites.other.showdown.front_default",
      ]),
      generation,
      evolutions,
    };
  } catch (error) {
    throw new Error("Error getting pokemon");
  }
}
