import { IApiParams } from "@/core/interfaces/api_response";
import { getAllPokemons } from ".";
import { IPokemonCard } from "@/core/interfaces/pokemon.model";
import { getOnePokemon, getOnePokemonCard } from "./getOne";

export async function getPokemonsPaginated(conditions: IApiParams) {
  const pokemons = (await getAllPokemons(conditions)).results;
  const promises = pokemons.map((p) => getOnePokemonCard(p.url));
  return Promise.allSettled(promises).then((data) => {
    return data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter(Boolean)
      .sort((a, b) => {
        const idA = ((a as IPokemonCard)?.id || 0) as number;
        const idB = ((b as IPokemonCard)?.id || 0) as number;
        return idA - idB;
      }) as IPokemonCard[];
  });
}
