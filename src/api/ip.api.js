import { addRequest } from "./config";
const URL = "http://ip-api.com/";

export const getCurrentInfo = () => {
  return addRequest(`${URL}/json`, "GET", (res) => res.data);
};


