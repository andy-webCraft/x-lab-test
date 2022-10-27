import { fetchOptions, fetchUrl } from "./config";
import { ResponseType } from "./../types/index.type";

export const api = {
  getAddresses(query: string): Promise<ResponseType> {
    return fetch(fetchUrl, { ...fetchOptions, body: JSON.stringify({ query }) }).then(
      (response) => response.json()
    );
  },
};
