import { NextResponse } from "next/server";

export async function GET(request, context) {
  const params = request.nextUrl.searchParams;
  let data = null;
  try {
    data = await fetch(
      `${process.env.NEXT_PUBLIC_NEWS_API_URL}/everything/?apiKey=${
        process.env.NEXT_PUBLIC_API_KEY_NEWS
      }&${params.toString()}`
    ).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
  // const time = 60 * 60 * 24;
  return NextResponse.json(data, {});
}
