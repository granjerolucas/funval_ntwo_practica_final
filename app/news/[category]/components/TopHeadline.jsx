"use client";
import { NewsApi } from "@/src/api";
import CardNews from "@/src/components/CardNews";
import React, { useEffect, useState } from "react";

const TopHeadline = ({ category, sources }) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const req = NewsApi.getTopNews(category, 1);
    req.action.then((res) => {
      setListNews(
        res.articles.map((item) => {
          item.source_detail = {
            name: category,
          };
          return item;
        })
      );
    });

    return () => {
      req.cancel();
    };
  }, [category]);
  return (
    <div className="md:h-[30rem] h-[22rem]">
      <CardNews item={listNews[0]} />
    </div>
  );
};

export default TopHeadline;
