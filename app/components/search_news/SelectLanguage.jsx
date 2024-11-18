import { baseUrl } from "@/src/utils/url.utils";
import React from "react";

const SelectLanguage = async () => {
  const res = await fetch(baseUrl(`api/sources/languages`), {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <select className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
      {data.map((item) => {
        return <option key={item.id}>{item.name}</option>;
      })}
    </select>
  );
};

export default SelectLanguage;
