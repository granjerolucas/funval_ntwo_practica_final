import { baseUrl } from "@/src/utils/url.utils";
import React from "react";

const Footer = async () => {
  const res = await fetch(baseUrl(`api/sources/categories`), {
    cache: "no-store",
  });
  const resS = await fetch(baseUrl(`api/sources/`), {
    cache: "no-store",
  });
  const resL = await fetch(baseUrl(`api/sources/languages`), {
    cache: "no-store",
  });
  const categories = await res.json();
  const sources = await resS.json();
  const languages = await resL.json();
  // console.log(languages)
  return (
    <div className="max-w-[85rem] w-full mx-auto mb-20 ">
      <hr />
      <div className="grid grid-cols-3 gap-4 mt-4 justify-center md:px-0 px-4">
        <div>
          <h3 className="font-semibold text-lg">Categories</h3>
          <ul className="space-y-3 text-sm mt-4">
            {categories.map((item, index) => {
              return (
                <li className="flex gap-x-3" key={index}>
                  <svg
                    className="shrink-0 size-4 mt-0.5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400 capitalize">
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Sources</h3>
          <ul className="space-y-3 text-sm mt-4">
            {sources.slice(0, 10).map((item, index) => {
              return (
                <li className="flex gap-x-3" key={index}>
                  <svg
                    className="shrink-0 size-4 mt-0.5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400 capitalize">
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Languages</h3>
          <ul className="space-y-3 text-sm mt-4">
            {languages.map((item, index) => {
              return (
                <li className="flex gap-x-3" key={index}>
                  <svg
                    className="shrink-0 size-4 mt-0.5 text-blue-600 dark:text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-800 dark:text-neutral-400 capitalize">
                    {item.name}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
