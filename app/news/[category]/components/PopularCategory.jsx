"use client";
import { NewsApi } from "@/src/api";

import React, { useEffect, useState } from "react";

const PopularCategory = ({ sources }) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const req = NewsApi.getLastNews(
      sources.map((item) => item.id),
      15,
      "relevancy",
      `-"removed"`
    );
    req.action.then((res) => {
      setListNews(
        res.articles.filter((item) => item.title !== "[Removed]").slice(0, 10)
      );
    });

    return () => {
      req.cancel();
    };
  }, []);
  return (
    <div>
      <h3 className="text-2xl font-semibold my-4 capitalize">Popular</h3>
      <ol className="list-decimal list-inside text-gray-800 dark:text-white md:text-2xl">
        {listNews.map((item, index) => {
          return (
            <li key={index} className="mb-3">
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default PopularCategory;
