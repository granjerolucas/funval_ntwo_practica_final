import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import realtiveTime from "dayjs/plugin/relativeTime";
dayjs.extend(realtiveTime);
const CardNews = ({ item, limitTitle = -1, category }) => {
  if (item == undefined) return null;
  return (
    <div className="relative bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hydrated bg-cover w-full h-full">
      <div
        className="w-full h-full rounded-xl  object-coverx"
        style={{
          backgroundImage: `url(${item.urlToImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        // src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        alt="Card Image"
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-full flex flex-col rounded-xl justify-end"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="p-4 md:p-5">
          <p className="mt-1 text-gray-300 capitalize font-semibold">
            {item.source_detail.category}
          </p>
          <a
            href={item.url}
            title={item.title}
            className={`${
              limitTitle > 0 ? "text-2xl" : "text-3xl"
            } font-bold text-gray-200`}
          >
            {limitTitle > 0
              ? `${item.title.substring(0, limitTitle)}...`
              : item.title}
          </a>
          <p className=" text-xs text-white ">
          Last updated {dayjs(item.publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
