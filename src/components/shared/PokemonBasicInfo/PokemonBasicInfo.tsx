import React, { FC } from "react";
import {
  IPokemon,
  IPokemonCard,
  IPokemonType,
} from "@/core/interfaces/pokemon.model";

interface PokemonBasicInfoProps {
  pokemon: IPokemonCard | IPokemon;
}

export const PokemonBasicInfo: FC<PokemonBasicInfoProps> = (
  props: PokemonBasicInfoProps,
) => {
  const { name, types, generation } = props.pokemon;
  return (
    <div>
      <p className="font-bold text-2xl mb-[6px]">
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
  );
};
