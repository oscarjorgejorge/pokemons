import React from "react";
import Image from "next/image";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: IPokemon;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { id, name, sprites, types, generation } = props.pokemon;

  return (
    <Link href={`/pokemons/${id}`}>
      <div className="shadow-md p-4 rounded-lg">
        <p className="text-2xl">{name}</p>
        <Image
          alt="pokemon photo"
          src={sprites.front_default}
          width={150}
          height={150}
        />
        <p>{generation}</p>
        {types.map((type: any) => (
          <span key={type.type.name}>{type.type.name}, </span>
        ))}
      </div>
    </Link>
  );
};
