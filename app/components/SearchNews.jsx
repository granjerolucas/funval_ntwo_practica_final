// 'use client'
import React, { Suspense } from "react";
import BaseSearchNews from "./search_news/BaseSearchNews";
import { baseUrl } from "@/src/utils/url.utils";
const SearchNews = async () => {
  const resL = await fetch(baseUrl(`api/sources/languages`), {
    cache: "no-store",
  });
  const dataL = await resL.json();

  const resS = await fetch(baseUrl(`api/sources/`), {
    cache: "no-store",
  });
  const dataS = await resS.json();
  return (
    <BaseSearchNews
      show={true}
      data={{
        languages: dataL,
        sources: dataS,
      }}
    />
  );
};

export default SearchNews;
