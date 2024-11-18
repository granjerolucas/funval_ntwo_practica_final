import { baseUrl } from "@/src/utils/url.utils";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const res = await fetch(baseUrl(`api/sources/categories`),{
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800 shadow-lg">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-betweenx">
          <a
            className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 dark:text-white"
            href="/"
            aria-label="Brand"
          >
            News App
          </a>
          <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
            {data.map((item, index) => {
              return (
                <Link
                  key={index}
                  className="font-medium capitalize text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
                  href={`/news/${item.id}`}
                  aria-current="page"
                >
                  {item.name}
                </Link>
              );
            })}
            
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
