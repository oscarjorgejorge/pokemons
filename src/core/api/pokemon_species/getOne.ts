import Http from "@/utils/http";
import { IPokemonSpecie } from "@/core/interfaces/pokemon_specie.model";

export async function getPokemonSpecie(id: string) {
  return Http.get<IPokemonSpecie>(`/pokemon-species/${id}`);
}
