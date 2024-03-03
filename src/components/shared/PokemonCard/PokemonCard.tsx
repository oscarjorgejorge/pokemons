import React from "react";
import Image from "next/image";
import { IPokemon, IPokemonType } from "@/core/interfaces/pokemon.model";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { id, name, sprites, types, generation } = props.pokemon;

  return (
    <Link href={`/pokemons/${id}`}>
      <div className="bg-white shadow-md p-4 rounded-lg space-y-5 hover:shadow-xl">
        <div className="w-full flex justify-center">
          <Image
            alt="pokemon photo"
            src={sprites.front_default}
            width={150}
            height={150}
          />
        </div>
        <p className="font-bold text-2xl">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </p>
        <div className="space-y-2">
          <p className="text-gray-500">Generation: {generation}</p>
          <p className="text-gray-500">
            Types:{" "}
            {types.map((type: IPokemonType, i: number) => (
              <span key={type.type.name}>
                {type.type.name}
                {i !== types.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        </div>
      </div>
    </Link>
  );
};
