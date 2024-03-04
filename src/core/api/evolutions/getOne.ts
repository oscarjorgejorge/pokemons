import Http from "@/utils/http";
import { IPokemonEvolution } from "@/core/interfaces/pokemon_evolution.model";

export async function getPokemonEvolutionChain(url: string) {
  return Http.get<IPokemonEvolution>(url);
}
