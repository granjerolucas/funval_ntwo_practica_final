"use client";
import { NewsApi } from "@/src/api";
import CardNewsSeparate from "@/src/components/CardNewsSeparate";
import React, { useEffect, useState } from "react";

const LastNews = ({ sources }) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const req = NewsApi.getLastNews(sources.map((item) => item.id), 25);
    req.action.then((res) => {
      setListNews(
        res.articles.filter((item) => item.title !== "[Removed]").slice(0, 20).map((item) => {
          const f = sources.find(
            (source) => source.id == item.source.id
          );
          if (f) {

            item.source_detail = f
          } else {
            item.source_detail = {
              name: 'None',
            }
          }

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
