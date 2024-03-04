import { IApiParams } from "@/core/interfaces/api_response";
import { getAllPokemons } from ".";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import { getOnePokemon } from "./getOne";

export async function getPokemonsPaginated(conditions: IApiParams) {
  const pokemons = (await getAllPokemons(conditions)).results;
  const promises = pokemons.map((p) => getOnePokemon(p.url));
  return Promise.allSettled(promises).then((data) => {
    return data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter(Boolean)
      .sort((a, b) => {
        const idA = ((a as IPokemon)?.id || 0) as number;
        const idB = ((b as IPokemon)?.id || 0) as number;
        return idA - idB;
      }) as IPokemon[];
  });
}
