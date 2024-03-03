import { getOnePokemon, getPokemons } from "@/core/api/pokemons";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import Image from "next/image";
import Link from "next/link";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  // console.log(params.pokemonId);
  const pokemon = await getOnePokemon(params.pokemonId);

  return (
    <div>
      <Link href="/pokemons">Back</Link>
      {/* <Table<IPokemon> items={[pokemon]} /> */}
    </div>
  );
}
