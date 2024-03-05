import Config from "@/config";
import { getOnePokemon } from "@/core/api/pokemons";
import { Pokemon } from "@/components/Pokemon";

export default async function PokemonEvolutionPage({
  params,
}: {
  params: { pokemonId: string; evolutionId: string };
}) {
  const pokemon = await getOnePokemon(
    `${Config.apiurl}/pokemon/${params.evolutionId}`,
  );

  return <Pokemon pokemon={pokemon} />;
}
