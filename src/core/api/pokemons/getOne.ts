import { IPokemon } from "@/core/interfaces/pokemon.model";
import Http from "@/utils/http";

export async function getOnePokemon(id: string) {
  return Http.get<IPokemon>(`/pokemon/${id}`).then((response) => response.data);
}
