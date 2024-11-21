// 'use client'
import React, { Suspense } from "react";
import SelectLanguage from "./search_news/SelectLanguage";
import SelectCategory from "./search_news/SelectCategory";
import BaseSearchNews from "./search_news/BaseSearchNews";
import { baseUrl } from "@/src/utils/url.utils";
const SearchNews = async () => {
  const res = await fetch(baseUrl(`api/sources/categories`), {
    cache: "no-store",
  });
  const data = await res.json();
  const resC = await fetch(baseUrl(`api/sources/languages`), {
    cache: "no-store",
  });
  const dataC = await resC.json();
  return (
    <BaseSearchNews
      show={true}
      data={{
        categories: data,
        languages: dataC,
      }}
    />
  );
};

export default SearchNews;
