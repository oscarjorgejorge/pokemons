import Config from "@/config";
import { getOnePokemon } from "@/core/api/pokemons";
import { getOnePokemonVersion2 } from "@/core/api/pokemons/getOne2";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  // console.log(params.pokemonId);
  const pokemon = await getOnePokemonVersion2(
    `${Config.apiurl}/pokemon/${params.pokemonId}`,
  );

  console.log(pokemon);

  return (
    <div>
      <Link href="/pokemons">Back</Link>
      <div>
        <pre>{JSON.stringify(pokemon, null, 2)}</pre>
      </div>
    </div>
  );
}
