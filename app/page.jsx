import CardNews from "@/src/components/CardNews";
import Image from "next/image";
import HomeSearch from "./components/HomeSearch";
import HomeSearch2 from "./components/HomeSearch2";
import SearchNews from "./components/SearchNews";

import QueryClientProvider from "./QueryClientProvider";
import { baseUrl } from "@/src/utils/url.utils";
import LastNews from "./components/LastNews";

async function Home() {
  const res = await fetch(baseUrl(`api/sources`), {
    cache: "no-store",
  });
  const sources = await res.json();

  return (
    <QueryClientProvider>
      <SearchNews />
      <HomeSearch2 sources={sources} />

      <div className="mt-4">
        <h3 className="text-2xl font-semibold my-4">Latest news</h3>
        <LastNews sources={sources}/>
      </div>
    </QueryClientProvider>
  );
}

export default Home;
