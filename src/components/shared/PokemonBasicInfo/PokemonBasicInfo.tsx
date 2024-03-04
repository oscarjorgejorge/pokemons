import { IPokemon, IPokemonType } from "@/core/interfaces/pokemon.model";
import React from "react";

interface PokemonBasicInfoProps {
  pokemon: IPokemon;
}

export const PokemonBasicInfo = (props: PokemonBasicInfoProps) => {
  const { name, types, generation } = props.pokemon;
  return (
    <>
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
    </>
  );
};
