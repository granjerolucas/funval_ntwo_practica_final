import { NextResponse } from "next/server";

export async function GET(request) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_NEWS_API_URL}/top-headlines/sources?apiKey=${process.env.API_KEY_NEWS}`
  ).then((res) => res.json());
  const time = 60 * 60 * 24;
  return NextResponse.json(data.sources, {
    headers: {
      "Cache-Control": `s-maxage=${time}, stale-while-revalidate=${time - 1}`,
    },
  });
}
