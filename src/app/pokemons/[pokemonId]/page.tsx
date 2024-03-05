import { Pokemon } from "@/components/Pokemon";
import Config from "@/config";
import { getOnePokemon } from "@/core/api/pokemons";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  const pokemon = await getOnePokemon(
    `${Config.apiurl}/pokemon/${params.pokemonId}`,
  );

  return <Pokemon pokemon={pokemon} />;
}
