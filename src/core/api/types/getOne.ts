import { IType } from "@/core/interfaces/type";
import Http from "@/utils/http";

export async function getType(idOrName: string) {
  return Http.get<IType>(`/type/${idOrName}`).then((response) => response.data);
}
