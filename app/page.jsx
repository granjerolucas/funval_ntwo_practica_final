import CardNews from "@/src/components/CardNews";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";
import CardNewsSeparate from "@/src/components/CardNewsSeparate";

export default function Home() {
  return (
    <div className=" ">
      <div className="grid grid-cols-[2fr_3fr_2fr] gap-4 mb-4">
        <CardNews />
        <HomeSearch />
        <CardNews />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <CardNews />
        <CardNews />
      </div>
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
