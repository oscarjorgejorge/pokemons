import _ from "lodash";
import { IElement } from "@/core/interfaces/element.model";
import { getGeneration } from "../generations";
import { getPokemonsByType } from ".";

export async function getPokemonsByGeneration(idOrName: string) {
  const generation = await getGeneration(idOrName);
  const promises = generation.types.map((t: IElement) =>
    getPokemonsByType(t.name),
  );
  return Promise.allSettled(promises).then((result) =>
    result.flatMap((p) => (p.status === "fulfilled" ? p.value : [])),
  );
}
