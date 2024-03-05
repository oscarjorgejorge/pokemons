"use client";

import React from "react";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface PokemonEvolutionsProps {
  evolutions: IPokemon[];
  originalPokemon: IPokemon;
}

export const PokemonEvolutions = (props: PokemonEvolutionsProps) => {
  const pathname = usePathname().split("/");
  const originalPokemonId =
    pathname.length === 4 && pathname[pathname.length - 2];

  const { evolutions, originalPokemon } = props;

  const { id, name: currentPokemonName } = originalPokemon;
  return (
    <div>
      <p className="w-full text-center font-extrabold text-4xl sm:mb-[16px]">
        Evolutions
      </p>
      <div className="flex flex-col sm:flex-row sm:justify-around">
        {evolutions.map(({ name, sprites, id: evolutionId }) => {
          const isCurrentPokemon = name === currentPokemonName;
          const isOriginalPokemonId = originalPokemonId == evolutionId;
          return !isCurrentPokemon ? (
            <Link key={name} href={`/pokemons/${id}/${evolutionId}`}>
              <div className="flex flex-col items-center">
                <Image
                  alt={`pokemon ${name} gif`}
                  src={sprites.other.home.front_default}
                  height={150}
                  width={150}
                />
                <p className="mt-[8px] font-bold text-2xl">
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                  {isOriginalPokemonId && (
                    <span className="text-gray-500 text-lg"> (original)</span>
                  )}
                </p>
              </div>
            </Link>
          ) : (
            <div key={name} className="flex flex-col items-center">
              <Image
                alt={`pokemon ${name} gif`}
                src={sprites.other.home.front_default}
                height={150}
                width={150}
              />
              <p className="mt-[8px] font-bold text-2xl">
                {name.charAt(0).toUpperCase() + name.slice(1)}
                <span className="text-gray-500 text-lg"> (current)</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
