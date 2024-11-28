import dayjs from "dayjs";
import React from "react";

const ResultsItems = ({ data, onClick }) => {
  return (
    <li className="cursor-pointer" onClick={onClick}>
      <div
        type="button"
        className="flex flex-col gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <p className="font-semibold text-lg">{data.title}</p>
        <div className="flex flex-row justify-between">
          <span className="limit-text-1 italic">{data.author}</span>
          <p className="text-right">{dayjs(data.publishedAt).fromNow()}</p>
        </div>
      </div>
    </li>
  );
};

export default ResultsItems;
