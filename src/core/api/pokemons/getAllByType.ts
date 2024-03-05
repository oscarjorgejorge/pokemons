import { ITypeElement } from "@/core/interfaces/type";
import { getType } from "../types";
import { IPokemonCard } from "@/core/interfaces/pokemon.model";
import { getOnePokemonCard } from ".";

export async function getPokemonsByType(idOrName: string) {
  const type = await getType(idOrName);

  const promises = type.pokemon.map((p: ITypeElement) =>
    getOnePokemonCard(p.pokemon.url),
  );
  return Promise.allSettled(promises).then((data) => {
    return data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter(Boolean)
      .sort((a, b) => {
        const idA = ((a as IPokemonCard)?.id || 0) as number;
        const idB = ((b as IPokemonCard)?.id || 0) as number;
        return idA - idB;
      }) as IPokemonCard[];
  });
}
