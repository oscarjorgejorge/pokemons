import _ from "lodash";
import Http from "@/utils/http";
import {
  IApiParams,
  IApiResponse,
  defaultApiParams,
} from "@/core/interfaces/api_response";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import { IElement } from "@/core/interfaces/pokemon_small.model";
import { getPokemonAbility } from "../abilities";

export async function getAllPokemons(conditions: IApiParams) {
  const offset = conditions.offset
    ? Number(conditions.offset)
    : defaultApiParams.offset;
  const limit = conditions.limit ? conditions.limit : defaultApiParams.limit;

  return Http.get<IApiResponse<IElement>>(
    `/pokemon?offset=${offset}&limit=${limit}`,
  ).then((response) => response.data);
}

async function getPokemonsInfo(pokemonsUrls: string[]): Promise<IPokemon[]> {
  const promises = [];
  for (const url of pokemonsUrls) {
    promises.push(
      Http.get<IPokemon>(url).then(
        ({ data: pokemon }) =>
          new Promise((resolve, reject) =>
            getPokemonAbility(pokemon.id)
              .then((generation) =>
                resolve({
                  ..._.pick(
                    pokemon,
                    "id",
                    "name",
                    "types",
                    "sprites.front_default",
                  ),
                  generation,
                }),
              )
              .catch(reject),
          ),
      ),
    );
  }
  return Promise.allSettled(promises).then((data) => {
    return data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter(Boolean)
      .sort((a, b) => {
        const idA = ((a as IPokemon)?.id || 0) as number;
        const idB = ((b as IPokemon)?.id || 0) as number;
        return idA - idB;
      }) as IPokemon[];
  });
}

export async function getPokemonsPaginated(conditions: IApiParams) {
  const pokemons = (await getAllPokemons(conditions)).results;
  return getPokemonsInfo(pokemons.map((p) => p.url));
}

export async function getAllTypes() {
  console.log("getAllTypes");
  return Http.get<IApiResponse<IElement>>(`/type`).then((response) =>
    response.data.results.map((t) => t.name),
  );
}

export async function getAllGenerations() {
  console.log("getAllGenerations");

  return Http.get<IApiResponse<IElement>>(`/generation`).then((response) =>
    response.data.results.map((t) => t.name),
  );
}

async function getType(idOrName: string) {
  return Http.get(`/type/${idOrName}`).then((response) => response.data);
}

async function getGeneration(idOrName: string) {
  return Http.get(`/generation/${idOrName}`).then((response) => response.data);
}

export async function getPokemonsByType(idOrName: string) {
  const type = await getType(idOrName);
  return getPokemonsInfo(type.pokemon.map((p: any) => p.pokemon.url));
}

export async function getPokemonsByGeneration(idOrName: string) {
  const generation = await getGeneration(idOrName);
  const promises = generation.types.map((t: any) => getPokemonsByType(t.name));
  return Promise.allSettled(promises).then((result) =>
    result.flatMap((p) => (p.status === "fulfilled" ? p.value : [])),
  );
}
