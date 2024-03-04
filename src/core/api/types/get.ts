import Http from "@/utils/http";
import { IApiResponse } from "@/core/interfaces/api_response";
import { IElement } from "@/core/interfaces/element.model";

export async function getAllTypes() {
  return Http.get<IApiResponse<IElement>>(`/type`).then((response) =>
    response.data.results.map((t) => t.name),
  );
}
