"use client";
import { IApiParams, defaultApiParams } from "@/core/interfaces/api_response";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import React, { useEffect, useState } from "react";
import { Pagination } from "../shared/Pagination";
import { PokemonCard } from "../shared/PokemonCard";
import { Search } from "../shared/Search";
import { Select } from "../shared/Select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PokemonsProps {
  count: number;
  searchParams: IApiParams;
  pokemons: IPokemon[];
  types: string[];
  generations: string[];
}

export const Pokemons = (props: PokemonsProps) => {
  const { count, pokemons, types, generations } = props;

  const [allPokemons, setAllPokemons] = useState<IPokemon[]>(pokemons);
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>(pokemons);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const offset = Number(searchParams.get("offset")) || defaultApiParams.offset;
  const limit = Number(searchParams.get("limit")) || defaultApiParams.limit;

  useEffect(() => {
    setAllPokemons(pokemons);
    setFilteredPokemon(pokemons);
  }, [pokemons]);

  const handleOnInputChange = (search: string) => {
    if (search === "") setFilteredPokemon(allPokemons);

    setFilteredPokemon(
      allPokemons.filter((pokemon) => {
        const regex = new RegExp(search, "i");
        return regex.test(pokemon.name);
      }),
    );
  };

  const handleOnSelectChange = (type: "type" | "generation", value: string) => {
    replace(`${pathname}?${type}=${value}`);
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-col space-y-4 space-x-0 sm:flex-row sm:space-x-10 sm:space-y-0">
        <div>
          <Select
            className="mr-6"
            placeholder="Type"
            onValueChange={(value) => {
              handleOnSelectChange("type", value);
            }}
            options={types}
          />
          <Select
            placeholder="Generation"
            onValueChange={(value) => {
              handleOnSelectChange("generation", value);
            }}
            options={generations}
          />
        </div>
        <Search
          onInputChange={handleOnInputChange}
          placeholder="Search pokemons"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <Pagination
        numberOfItems={count}
        currentPage={offset / limit}
        rowsPerPage={limit}
        totalPages={count / limit - 1}
        path="/pokemons"
      />
    </div>
  );
};
