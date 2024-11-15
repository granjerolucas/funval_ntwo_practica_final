import CardNews from "@/src/components/CardNews";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";
import CardNewsSeparate from "@/src/components/CardNewsSeparate";
import HomeSearch2 from "./components/HomeSearch2";
import SearchNews from "./components/SearchNews";

export default function Home() {
  return (
    <div className=" ">
      <SearchNews/>
      <HomeSearch2 />
     
      <div className="mt-4">
        <h3 className="text-2xl font-semibold my-4">Latest news</h3>
        <div className="columns-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            return <CardNewsSeparate key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
