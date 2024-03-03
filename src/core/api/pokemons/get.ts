import { IApiParams, IApiResponse } from "@/core/interfaces/api_response";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import { ISmallPokemon } from "@/core/interfaces/pokemon_small.model";
import Http from "@/utils/http";

async function getSmallPokemons({ offset, limit }: IApiParams) {
  const start = offset ? Number(offset) : 0;
  const end = limit ? start + Number(limit) : 10;

  return Http.get<IApiResponse<ISmallPokemon>>(
    `/pokemon?offset=${offset}&limit=${limit}`,
  ).then((response) => response.data.results);
}

export async function getPokemons(conditions: IApiParams) {
  const smallPokemons = await getSmallPokemons(conditions);

  const promisesPokemons = [];
  const promisesAbilities = [];

  for (let i = 0; i < smallPokemons.length; i++) {
    promisesPokemons.push(
      Http.get<IPokemon>(smallPokemons[i].url).then(
        (response) => response.data,
      ),
    );

    promisesAbilities.push(
      Http.get(`/ability/${i + 1}`).then((response) => response.data),
    );
  }

  const pokemon = await Promise.allSettled(promisesPokemons).then((data) =>
    data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter((d) => d !== undefined)
      .sort((a, b) => a.id - b.id),
  );

  const abilitiesPromise = await Promise.allSettled(promisesAbilities).then(
    (data) =>
      data
        .map((d) => (d.status === "fulfilled" ? d.value : undefined))
        .filter(Boolean)
        .sort((a, b) => a - b),
  );

  // return pokemon as IPokemon[];

  // return Promise.allSettled([pokemonsPromise, abilitiesPromise]).then((data) =>
  //   data.map((d) => (d.status === "fulfilled" ? d.value : undefined)),
  // );

  return pokemon.map((p, i) => ({
    ...p,
    generation: abilitiesPromise[i]?.generation,
  })) as IPokemon[];
}
