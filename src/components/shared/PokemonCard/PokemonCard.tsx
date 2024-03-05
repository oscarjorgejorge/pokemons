import React, { FC } from "react";
import Link from "next/link";
import { IPokemonCard } from "@/core/interfaces/pokemon.model";
import { PokemonBasicInfo } from "../PokemonBasicInfo";
import { Slider } from "../Slider";

interface PokemonCardProps {
  pokemon: IPokemonCard;
}

export const PokemonCard: FC<PokemonCardProps> = (props: PokemonCardProps) => {
  const { pokemon } = props;

  const { sprites } = pokemon;

  const slides = [
    sprites.other.home.front_default,
    sprites.front_default,
    sprites.back_default,
  ];

  return (
    <Link href={`/pokemons/${pokemon.id}`}>
      <div className="bg-white shadow-md p-4 rounded-lg space-y-6 hover:shadow-xl">
        <div className="w-full flex justify-center mb-[12px]">
          <Slider slides={slides} />
        </div>
        <PokemonBasicInfo pokemon={pokemon} />
      </div>
    </Link>
  );
};
