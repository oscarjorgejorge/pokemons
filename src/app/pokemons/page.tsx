import { Pokemons } from "@/components/Pokemons";
import { getAllGenerations } from "@/core/api/generations";
import {
  getAllPokemons,
  getPokemonsByGeneration,
  getPokemonsByType,
  getPokemonsPaginated,
} from "@/core/api/pokemons";

import { getAllTypes } from "@/core/api/types";
import { IApiParams } from "@/core/interfaces/api_response";

export default async function PokemonsPage({
  searchParams,
}: {
  searchParams: IApiParams & { type?: string; generation?: string };
}) {
  const { count } = await getAllPokemons(searchParams);

  const allTypes = await getAllTypes();
  const allGenerations = await getAllGenerations();

  let pokemons;

  if (searchParams.type) {
    pokemons = await getPokemonsByType(searchParams.type);
  } else if (searchParams.generation) {
    pokemons = await getPokemonsByGeneration(searchParams.generation);
  } else {
    pokemons = await getPokemonsPaginated(searchParams);
  }

  return (
    <Pokemons
      pokemons={pokemons}
      count={count}
      searchParams={searchParams}
      types={allTypes}
      generations={allGenerations}
    />
  );
}
