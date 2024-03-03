import { IPokemon } from "@/core/interfaces/pokemon.model";
import _ from "lodash";
import Http from "@/utils/http";
import { getPokemonAbility } from "../abilities";

export async function getOnePokemon(id: string) {
  return Http.get<IPokemon>(`/pokemon/${id}`).then(
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
  );
}
