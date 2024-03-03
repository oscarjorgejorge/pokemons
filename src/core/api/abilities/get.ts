import Http from "@/utils/http";

export async function getPokemonAbility(id: string) {
  return Http.get(`/ability/${id}`).then(
    (response) => response.data.generation.name,
  );
}
