import axios from "axios";
import { addRequest } from "./config";
import dayjs from "dayjs";
import { baseUrl } from "../utils/url.utils";
const URL = "https://newsapi.org/v2";
const axiosClient = axios.create();

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      config.params = {
        ...config.params,
        // apiKey: "097a7097a9424edf91476532a00e4848",
        apiKey: process.env.NEXT_PUBLIC_API_KEY_NEWS,
      };
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

export const getCurrentNews = (sources = ["abc-news"]) => {
  const current = dayjs();
  return addRequest(
    // `${URL}/everything`,
    baseUrl("api/news/everything"),
    "GET",
    (res) => res.data,
    {
      params: {
        // q: "",
        from: current.subtract(1, "day").format("YYYY-MM-DD"),
        sortBy: "popularity",
        sources: sources.join(","),
        pageSize: 10,
      },
    },
    axiosClient
  );
};

export const getLastNews = (
  sources = ["abc-news"],
  pageSize = 12,
  sortBy = "publishedAt",
  q = "",
  from = ""
) => {
  if (from == "") {
    from = dayjs();
    from = from.subtract(1, "day").format("YYYY-MM-DD");
  }
  return addRequest(
    // `${URL}/everything`,
    baseUrl("api/news/everything"),
    "GET",
    (res) => res.data,
    {
      params: {
        q,
        from,
        sortBy,
        sources: sources.join(","),
        pageSize,
      },
    },
    axiosClient
  );
};

export const getSearch = (
  sources = [],
  pageSize = 12,
  sortBy = "publishedAt",
  q = "",
  language = "",
  from = ""
) => {
  // if (from == "") {
  //   from = dayjs();
  //   from = from.subtract(1, "day").format("YYYY-MM-DD");
  // }
  let _aditionalParams = {};
  if (sources.length > 0) {
    _aditionalParams = {
      sources: sources.join(","),
    };
  }
  return addRequest(
    // `${URL}/everything`,
    baseUrl("api/news/everything"),
    "GET",
    (res) => res.data,
    {
      params: {
        q,
        // from,
        language,

        sortBy,
        pageSize,
        ..._aditionalParams,
      },
    },
    axiosClient
  );
};

export const getTopNews = (category = "general", pageSize = 5) => {
  const current = dayjs();
  return addRequest(
    // `${URL}/top-headlines`,
    baseUrl("api/news/top-headlines"),
    "GET",
    (res) => res.data,
    {
      params: {
        // q: "",
        // from: current.subtract(1, "day").format("YYYY-MM-DD"),
        // sortBy: "popularity",
        category,
        pageSize,
      },
    },
    axiosClient
  );
};
