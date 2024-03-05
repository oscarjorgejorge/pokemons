import React from "react";
import Link from "next/link";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import { PokemonBasicInfo } from "../PokemonBasicInfo";
import { Slider } from "../Slider";

interface PokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { pokemon } = props;

  return (
    <Link href={`/pokemons/${pokemon.id}`}>
      <div className="bg-white shadow-md p-4 rounded-lg space-y-6 hover:shadow-xl">
        <div className="w-full flex justify-center mb-[12px]">
          <Slider
            slides={[
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png",
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            ]}
          />
        </div>
        <PokemonBasicInfo pokemon={pokemon} />
      </div>
    </Link>
  );
};
