import { Pokemon } from "@/components/Pokemon";
import Config from "@/config";
import { getOnePokemon } from "@/core/api/pokemons";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  const pokemon = await getOnePokemon(
    `${Config.apiurl}/pokemon/${params.pokemonId}`,
  );

  console.log(pokemon);

  return (
    <div>
      <Pokemon pokemon={pokemon} />
      <div>
        <pre>{JSON.stringify(pokemon, null, 2)}</pre>
      </div>
    </div>
  );
}
