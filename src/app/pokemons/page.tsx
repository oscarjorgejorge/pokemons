import { Pokemons } from "@/components/Pokemons";
import { getAllPokemons, getPokemonsPaginated } from "@/core/api/pokemons/get2";
import { IApiParams } from "@/core/interfaces/api_response";

export default async function PokemonsPage({
  searchParams,
}: {
  searchParams: IApiParams;
}) {
  const { count } = await getAllPokemons(searchParams);
  const pokemons = await getPokemonsPaginated(searchParams);
  console.log(pokemons);
  console.log({ count });

  return (
    <Pokemons pokemons={pokemons} count={count} searchParams={searchParams} />
  );
}
