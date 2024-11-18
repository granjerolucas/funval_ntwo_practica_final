import axios from "axios";
// import { isServer } from "../utils/helper";
// import { getSession } from "next-auth/react";

export const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      // const token = localStorage.getItem("token_access");
      // config.params = {
      //   ...config.params,
      //   apiKey: '097a7097a9424edf91476532a00e4848',
      // }
      // if (!isServer) {
      //   const sess = await getSession()

      //   // const token = localStorage.getItem("token_access");
      //   const token = sess.accessToken;

      //   if (token) {
      //     config.headers["Authorization"] = `${token}`;
      //   }
      // } else {
      // }
      // Si existe el token, configurarlo en el encabezado de autorización
      // if (token) {
      // config.headers["Authorization"] = `Bearer ${token}`;
      // } else {
      //   config.headers["Authorization"] = `Basic ${btoa(
      //     import.meta.env.REACT_APP_OAUTH2_CLIENT +
      //       ":" +
      //       import.meta.env.REACT_APP_OAUTH2_SECRET
      //   )}`;
      // }
    } catch (error) {
      console.log(error);
    }

    return config;
  },
  (error) => {
    // console.log('error', error);
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    ) {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  }
);

/**
 *
 * @template T - The type of data that the promise will resolve with.
 * @param {string} url - The URL to make the request to.
 * @param {"GET" | "POST" | "PUT" | "DELETE", "PATCH"} method - The HTTP method to use
 * @param {(res: import("axios").AxiosResponse<any,any>) => void} preData - A function to process the response data
 * @param {import("axios").AxiosRequestConfig} options - Additional options for the axios request.
 * @returns {{ action: Promise<T>, cancel: function }} An object with:
 *  - `action` {Promise<T>} - A promise that resolves with the processed response data.
 *  - `cancel` {function} - A function to cancel the request.
 */
export const addRequest = (
  url,
  method,
  preData = null,
  options = {},
  axiosHandler = null
) => {
  console.log("log url", url, axiosHandler);
  if (preData === null) {
    preData = (res) => res.data;
  }
  if (axiosHandler === null) {
    axiosHandler = axiosClient;
  }
  const _controller = new AbortController();
  let req = new Promise((resolve, reject) => {
    axiosHandler({
      method,
      url,
      signal: _controller.signal,
      ...options,
    })
      .then((res) => {
        resolve(preData(res));
      })
      .catch((err) => {
        if (err.code !== "ERR_CANCELED") {
          reject(err);
        }
      });
  });
  try {
  } catch (error) {}

  return {
    action: req,
    cancel: () => {
      _controller.abort();
    },
  };
};
