import { addRequest } from "./config";
const URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

export const getCurrentInfo = (latitude, longitude) => {
  return addRequest(`${URL}`, "GET", (res) => res.data, {
    params: {
      latitude,
      longitude,
      localityLanguage: "es",
    },
  });
};
