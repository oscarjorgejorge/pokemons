import Http from "@/utils/http";
import { IAbility } from "@/core/interfaces/ability";

export async function getPokemonAbility(id: string) {
  return Http.get<IAbility>(`/ability/${id}`).then(
    (response) => response.data.generation.name,
  );
}
