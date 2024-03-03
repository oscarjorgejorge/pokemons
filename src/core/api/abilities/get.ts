import { IApiParams, IApiResponse } from "@/core/interfaces/api_response";
import { IPokemon } from "@/core/interfaces/pokemon.model";
import { ISmallPokemon } from "@/core/interfaces/pokemon_small.model";
import Http from "@/utils/http";

export async function getAbilities({ offset, limit }: IApiParams) {
  const start = offset ? Number(offset) : 0;
  const end = limit ? start + Number(limit) : 20;

  const promisesAbilities = [];

  for (let i = start; i <= end; i++) {
    promisesAbilities.push(
      Http.get(`/ability/${i}`).then((response) => response.data),
    );
  }

  const abilities = await Promise.allSettled(promisesAbilities).then((data) =>
    data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter(Boolean)
      .sort((a, b) => a - b),
  );

  return {
    abilities,
  };
}
