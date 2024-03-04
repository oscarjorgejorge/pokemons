import {
  IApiParams,
  IApiResponse,
  defaultApiParams,
} from "@/core/interfaces/api_response";
import { IElement } from "@/core/interfaces/element.model";
import Http from "@/utils/http";

export async function getAllPokemons(conditions: IApiParams) {
  const offset = conditions.offset
    ? Number(conditions.offset)
    : defaultApiParams.offset;
  const limit = conditions.limit ? conditions.limit : defaultApiParams.limit;

  return Http.get<IApiResponse<IElement>>(
    `/pokemon?offset=${offset}&limit=${limit}`,
  ).then((response) => response.data);
}
