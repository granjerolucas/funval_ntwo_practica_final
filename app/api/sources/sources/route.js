import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";
export async function GET(request) {
  const filePath = path.join(
    process.cwd(),
    "app/api/sources/languages",
    "languages.json"
  );
  const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  console.log(jsonData[0]);
  const resData = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/sources`
  ).then((res) => res.json());

  let filteredData = [];
  if (resData.length > 0) {
    filteredData = [...new Set(resData.map((item) => item.id))];
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
  return NextResponse.json(filteredData.map(item => {
    return {
      id: item,
      name: item,
    }
  }), {
    headers: {
      "Cache-Control": `s-maxage=${time}, stale-while-revalidate=${time - 1}`,
    },
  });
}
