"use client";
import { NewsApi } from "@/src/api";
import CardNewsSeparate from "@/src/components/CardNewsSeparate";
import React, { useEffect, useState } from "react";

const LastNews = ({ sources }) => {
  const [listNews, setListNews] = useState([]);
  console.log("luca", sources);
  useEffect(() => {
    const req = NewsApi.getLastNews(sources.map((item) => item.id));
    console.log("aaaaaaaaaaa", req);
    req.action.then((res) => {
      setListNews(
        res.articles.map((item) => {
          item.source_detail = sources.find(
            (source) => source.id == item.source.id
          );
          return item;
        })
      );
    });

    return () => {
      req.cancel();
    };
  }, []);
  return (
    <div className="columns-4 gap-4">
      {listNews.map((item, index) => {
        return <CardNewsSeparate key={index} item={item} limitTitle={60} />;
      })}
    </div>
  );
};

export default LastNews;
