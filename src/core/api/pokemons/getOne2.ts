import { IPokemon } from "@/core/interfaces/pokemon.model";
import _ from "lodash";
import Http from "@/utils/http";
import { getPokemonAbility } from "../abilities";

export async function getOnePokemonVersion2(id: string) {
  try {
    const { data: pokemon } = await Http.get<IPokemon>(`/pokemon/${id}`);

    const generation = await getPokemonAbility(pokemon.id);
    const { data: pokemonSpecies } = await Http.get(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`,
    );
    const { data: evolutionChain } = await Http.get(
      pokemonSpecies.evolution_chain.url,
    );

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
        ]),
      );
      currentEvolution = currentEvolution.evolves_to[0]; // Assuming single branch evolution
    }

    return {
      ..._.pick(pokemon, ["id", "name", "types", "sprites.front_default"]),
      generation,
      evolutions,
    };
  } catch (error) {
    throw new Error("Error getting pokemon");
  }
}
