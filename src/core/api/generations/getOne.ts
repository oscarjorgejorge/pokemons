import { IGeneration } from "@/core/interfaces/generation.model";
import Http from "@/utils/http";

export async function getGeneration(idOrName: string) {
  return Http.get<IGeneration>(`/generation/${idOrName}`).then(
    (response) => response.data,
  );
}
