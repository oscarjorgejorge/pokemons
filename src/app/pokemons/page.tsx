import { Pokemons } from "@/components/Pokemons";
import {
  getAllGenerations,
  getAllPokemons,
  getAllTypes,
  getPokemonsByGeneration,
  getPokemonsByType,
  getPokemonsPaginated,
} from "@/core/api/pokemons/get";
import { IApiParams } from "@/core/interfaces/api_response";
import { Suspense } from "react";

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
    <Suspense fallback="Loading... ">
      <Pokemons
        pokemons={pokemons}
        count={count}
        searchParams={searchParams}
        types={allTypes}
        generations={allGenerations}
      />
    </Suspense>
  );
}
