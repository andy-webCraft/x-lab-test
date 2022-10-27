export const fetchUrl =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "7720b9ed2ebe39ef79bccbcf07ce101db47cfcab";

export const fetchOptions: RequestInit = {
  method: "POST",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Token " + token,
  },
};
