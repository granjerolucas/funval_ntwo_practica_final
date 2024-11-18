import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
export async function GET(request) {
  const filePath = path.join(
    process.cwd(),
    "app/api/sources/countries",
    "data.json"
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log(jsonData)
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sources`
  ).then((res) => res.json());

  let filteredData = [];
  if (resData.length > 0) {
    filteredData = [...new Set(resData.map((item) => item.country))];
  }
  // {
  //   id: 'rbc',
  //   name: 'RBC',
  //   description: 'Главные новости политики, экономики и бизнеса, комментарии аналитиков, финансовые данные с российских и мировых биржевых систем на сайте rbc.ru.',
  //   url: 'https://www.rbc.ru',
  //   category: 'general',
  //   language: 'ru',
  //   country: 'ru'
  // },

  const time = 60 * 60 * 24;
  return NextResponse.json(
    filteredData
      .map((item) => jsonData.find((i) => i.Code.toLowerCase() === item.toLowerCase()))
      .filter((item) => item)
      .map((item) => {
        return {
          id: item.Code.toLowerCase(),
          name: item.Name,
        };
      }),
    {
      headers: {
        "Cache-Control": `s-maxage=${time}, stale-while-revalidate=${time - 1}`,
      },
    }
  );
}
