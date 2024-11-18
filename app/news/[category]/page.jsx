import SearchNews from "@/app/components/SearchNews";
import { baseUrl } from "@/src/utils/url.utils";
import React from "react";
import NewsCategory from "./components/NewsCategory";

const NewsCategoryPage = async (props) => {
  const res = await fetch(baseUrl(`api/sources`), {
    cache: "no-store",
  });
  const sources = await res.json();
  const params = await props.params;
  const finalSources = sources.filter(
    (item) => item.category.toLowerCase() === params.category.toLowerCase()
  );
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4 capitalize">
        {params.category}
      </h1>
      <SearchNews />
      <NewsCategory sources={finalSources} category={params.category} />
     
    </div>
  );
};

export default NewsCategoryPage;
