"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { useIsMobile } from "@/core/hooks/useIsMobile";
import { IPokemon, PokemonStat } from "@/core/interfaces/pokemon.model";
import { PokemonBasicInfo } from "../shared/PokemonBasicInfo";
import { StatBar } from "../shared/StatBar";
import { Button } from "../shared/Button";
import { PokemonEvolutions } from "../shared/PokemonEvolutions/PokemonEvolutions";
import { Slider } from "../shared/Slider";

interface PokemonProps {
  pokemon: IPokemon;
}

export const Pokemon = (props: PokemonProps) => {
  const { pokemon } = props;

  const { evolutions, sprites, stats } = pokemon;
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className="bg-white shadow-md p-[16px] rounded-md space-y-8 relative">
      <Image
        alt="pokemon page image"
        src="https://i.pinimg.com/originals/34/c1/e5/34c1e5d371d64a581b1902ec5c4509f4.png"
        width={isMobile ? 100 : 200}
        height={isMobile ? 100 : 200}
        className="absolute left-1/2 -translate-x-1/2 top-[-4%] sm:top-[-15%]"
      />
      <Button
        onClick={handleClick}
        text="Back"
        style={{ marginTop: 0 }}
        icon={<IoArrowBack />}
      />
      <div className="w-full flex flex-col space-y-12 sm:flex-row justify-around items-center sm:space-y-0">
        <div className="w-full sm:w-auto">
          <PokemonBasicInfo pokemon={pokemon} />
          <div className="w-full mt-[24px] sm:min-w-[600px]">
            <strong>Stats:</strong>
            {stats.map(({ base_stat, stat }: PokemonStat) => (
              <StatBar key={stat.name} statName={stat.name} value={base_stat} />
            ))}
          </div>
        </div>
        <Image
          alt={`pokemon ${pokemon.name} gif`}
          src={sprites.other.showdown.front_default}
          height={isMobile ? 180 : 300}
          width={isMobile ? 180 : 300}
        />
      </div>
      <div className="border-t border-gray-100" />
      <Slider
        slides={[
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png",
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        ]}
      />
      {/* <PokemonEvolutions originalPokemon={pokemon} evolutions={evolutions} /> */}
    </div>
  );
};
