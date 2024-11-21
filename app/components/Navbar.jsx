import { baseUrl } from "@/src/utils/url.utils";
import Link from "next/link";
import React from "react";
import BaseNavbar from "./navbar/BaseNavbar";

const Navbar = async () => {
  const res = await fetch(baseUrl(`api/sources/categories`), {
    cache: "no-store",
  });
  const data = await res.json();
  return (
    <div className="block fixed z-50 w-full top-0"> 
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800 shadow-lg">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
         <BaseNavbar data={data}/>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
