"use client";

import {
  IPokemon,
  IPokemonType,
  PokemonStat,
} from "@/core/interfaces/pokemon.model";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { PokemonBasicInfo } from "../shared/PokemonBasicInfo";

interface PokemonProps {
  pokemon: IPokemon;
}

export const Pokemon = (props: PokemonProps) => {
  const { pokemon } = props;

  const { name, sprites, generation, types, stats } = pokemon;
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div>
      <button onClick={handleClick}>Go Back</button>
      <div className="w-full flex justify-between">
        <div>
          <PokemonBasicInfo pokemon={pokemon} />

          <strong>Stats:</strong>
          <ul>
            {stats.map(({ base_stat, stat }: PokemonStat) => (
              <li key={stat.name}>
                {stat.name}: {base_stat}
              </li>
            ))}
          </ul>
        </div>

        <Image
          alt={`pokemon ${name} gif`}
          src={sprites.other.showdown.front_default}
          height={300}
          width={300}
        />
        <div>Evolutions</div>
      </div>
    </div>
  );
};
