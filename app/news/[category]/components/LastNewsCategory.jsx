"use client";

import { NewsApi } from '@/src/api';
import CardNewsSeparateLateral from '@/src/components/CardNewsSeparateLateral';
import React, { useEffect, useState } from 'react'

const LastNewsCategory = ({sources, category}) => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const req = NewsApi.getLastNews(sources.map((item) => item.id));
    req.action.then((res) => {
      setListNews(
        res.articles.map((item) => {
          item.source_detail = {
            name: category,
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
    <div>
      {listNews.map((item, index) => {
        return <CardNewsSeparateLateral key={index} item={item}  />;
      })}
    </div>
  )
}

export default LastNewsCategory