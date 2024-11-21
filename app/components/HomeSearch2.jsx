"use client";
import CardNews from "@/src/components/CardNews";
import React, { useEffect, useState } from "react";
import WeatherCurrent from "./WeatherCurrent";
import { NewsApi } from "@/src/api";

const HomeSearch2 = ({ sources }) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const req = NewsApi.getCurrentNews(sources.map((item) => item.id));
    req.action.then((res) => {
      setListNews(
        res.articles
          .filter((item) => item.title !== "[Removed]")
          .slice(0, 5)
          .map((item) => {
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
  }, [sources]);
  return (
    <div className="block md:grid md:grid-cols-[8fr_6fr] gap-4 ">
      <div className="md:h-auto h-[20rem]">
        <CardNews item={listNews[0]} />
      </div>
      <div className="flex flex-col gap-4">
        <WeatherCurrent />
        <div className="flex h-[16rem] gap-4">
          <CardNews item={listNews[1]} limitTitle={28} />
          <CardNews item={listNews[2]} limitTitle={28} />
        </div>
      </div>
    </div>
  );
};

export default HomeSearch2;
