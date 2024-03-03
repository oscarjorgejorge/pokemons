export interface IApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

export interface IApiParams {
  offset: number;
  limit: number;
}

export const defaultApiParams: IApiParams = {
  offset: 0,
  limit: 10,
};
