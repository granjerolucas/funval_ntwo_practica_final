import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import realtiveTime from "dayjs/plugin/relativeTime";
dayjs.extend(realtiveTime);
const CardNewsSeparateLateral = ({ item, limitTitle = -1, category }) => {
  if (item == undefined) return null;

  return (
    <div className="relative grid grid-cols-[1fr_2fr] gap-4 bg-white hover:borderx hover:shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70 hydrated bg-cover  mb-4 items-center">
      <div
        className="w-full h-[14rem] rounded-xl  object-coverx"
        style={{
          backgroundImage: `url(${item.urlToImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        // src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
        alt="Card Image"
      ></div>
      <div className="bottom-0 left-0 w-full  flex flex-col rounded-xl justify-end">
        <div className="p-2">
          <p className="text-gray-400 capitalize">
            {item.source_detail.category}
          </p>
          <a
            target="_blank"
            href={item.url}
            title={item.title}
            className="text-lg font-bold text-gray-800"
          >
            {limitTitle > 0
              ? `${item.title.substring(0, limitTitle)}...`
              : item.title}
          </a>
          <p>{item.description}</p>
          <p className=" text-xs text-gray-500 ">
            Last updated {dayjs(item.publishedAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardNewsSeparateLateral;
