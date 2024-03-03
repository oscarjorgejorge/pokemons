"use client";
import { IApiParams, defaultApiParams } from "@/core/interfaces/api_response";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import React, { useEffect, useState } from "react";
import { Pagination } from "../shared/Pagination";
import { PokemonCard } from "../shared/PokemonCard";
import { Search } from "../shared/Search";

interface PokemonsProps {
  count: number;
  searchParams: IApiParams;
  pokemons: IPokemon[];
}

export const Pokemons = (props: PokemonsProps) => {
  const { count, searchParams, pokemons } = props;

  const [allPokemons, setAllPokemons] = useState<IPokemon[]>(pokemons);
  const [filteredPokemon, setFilteredPokemon] = useState<IPokemon[]>(pokemons);

  const existsSearchParams =
    Object.keys(searchParams).length > 0 ? true : false;
  const { offset, limit } = existsSearchParams
    ? searchParams
    : defaultApiParams;

  useEffect(() => {
    setAllPokemons(pokemons);
    setFilteredPokemon(pokemons);
  }, [pokemons]);

  const handleOnInputChange = (search: string) => {
    console.log("here");
    if (search === "") setFilteredPokemon(allPokemons);

    setFilteredPokemon(
      allPokemons.filter((pokemon) => {
        const regex = new RegExp(search, "i");
        return regex.test(pokemon.name);
      }),
    );
  };

  return (
    <div className="space-y-12">
      <Search
        onInputChange={handleOnInputChange}
        placeholder="Search pokemons"
      />
      <div className="grid grid-cols-5 gap-4">
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
