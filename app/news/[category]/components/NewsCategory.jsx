import React from "react";
import TopHeadline from "./TopHeadline";
import PopularCategory from "./PopularCategory";
import LastNewsCategory from "./LastNewsCategory";

const NewsCategory = ({ sources, category }) => {

  return (
    <div className="md:grid md:grid-cols-[6fr_3fr] gap-4 ">
      <div className="">
        <TopHeadline category={category} sources={sources} />
        <div className="mt-4">
          <h3 className="text-2xl font-semibold my-4">Latest news</h3>
          <LastNewsCategory category={category} sources={sources} />
        </div>
      </div>
      <PopularCategory sources={sources} />
    </div>
  );
};

export default NewsCategory;
