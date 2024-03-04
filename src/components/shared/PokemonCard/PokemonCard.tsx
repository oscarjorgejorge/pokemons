import React from "react";
import Image from "next/image";
import { IPokemon, IPokemonType } from "@/core/interfaces/pokemon.model";
import Link from "next/link";
import { PokemonBasicInfo } from "../PokemonBasicInfo";

interface PokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;

  return (
    <Link href={`/pokemons/${pokemon.id}`}>
      <div className="bg-white shadow-md p-4 rounded-lg space-y-5 hover:shadow-xl">
        <div className="w-full flex justify-center">
          <Image
            alt="pokemon photo"
            src={pokemon.sprites.front_default}
            width={150}
            height={150}
          />
        </div>
        <PokemonBasicInfo pokemon={pokemon} />
      </div>
    </Link>
  );
};
