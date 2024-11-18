import { NextResponse } from "next/server";

const data = {
  status: "ok",
  totalResults: 45,
  articles: [
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "BRIAN MELLEY Associated Press",
      title:
        "Gold pocket watch given to captain who rescued Titanic survivors sells for nearly $2M",
      description:
        "A gold pocket watch given to the ship captain who rescued 700 survivors from the Titanic has sold at auction for nearly $2 million",
      url: "https://abcnews.go.com/International/wireStory/gold-pocket-watch-captain-rescued-titanic-survivors-sells-115941943",
      urlToImage:
        "https://i.abcnewsfe.com/a/f241a111-bbf8-4a52-a2f8-bb069898986d/wirestory_fc408bba860820ab927831d16811f2f6_16x9.jpg?w=1600",
      publishedAt: "2024-11-17T14:06:29Z",
      content:
        "LONDON -- A gold pocket watch given to the ship captain who rescued 700 survivors from the Titanic sold at auction for nearly $2 million, setting a record for memorabilia from the ship wreck. \r\nThe 1… [+2594 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Peter Charalambous, Matthew Glasser, Ivan Pereira",
      title: "What to know about Trump's energy secretary nominee Chris Wright",
      description:
        "President-elect Donald Trump has nominated Chris Wright, a fracking executive who has long ties to the energy industry, to lead the Department of Energy.",
      url: "https://abcnews.go.com/Politics/trumps-energy-secretary-nominee-chris-wright/story?id=115935864",
      urlToImage:
        "https://i.abcnewsfe.com/a/81bb49a5-56d2-4961-80ec-2b21688b9778/chris-wright-gty-jt-241116_1731792708760_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-11-17T02:11:54Z",
      content:
        "President-elect Donald Trump announced Saturday that he has nominated Chris Wright, an executive of a fracking company who has fiercely criticized the existence of a climate crisis and the transition… [+5393 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Michelle Stoddart, Alex Presha",
      title:
        "AI, North Korea, Trump: What Biden and Xi discussed in their final meeting",
      description:
        "President Joe Biden met with Chinese President Xi Jinping on the sidelines of the APEC conference in Lima, Peru -- their last meeting of Biden’s presidency.",
      url: "https://abcnews.go.com/Politics/ai-north-korea-trump-biden-xi-discussed-final/story?id=115936991",
      urlToImage:
        "https://i.abcnewsfe.com/a/73a15c5f-d404-47ad-96fd-ff4bffaf4fb2/biden-xi-rt-jt-241116_1731793368363_hpMain_16x9.jpg?w=1600",
      publishedAt: "2024-11-17T03:37:21Z",
      content:
        "President Joe Biden met with Chinese President Xi Jinping face-to-face Saturday afternoon on the sidelines of the Asia-Pacific Economic Cooperation (APEC) conference in Lima, Peru -- their last meeti… [+3932 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "YIRMIYAN ARTHUR Associated Press",
      title:
        "Park regulars in New Delhi's Lodhi Garden say toxic pollution levels won't force them out",
      description:
        "Many of the regulars at Lodhi Garden in New Delhi, one of the world’s most polluted cities, say they won’t let rising pollution levels deter their daily visits",
      url: "https://abcnews.go.com/International/wireStory/park-regulars-new-delhis-lodhi-garden-toxic-pollution-115937598",
      urlToImage:
        "https://i.abcnewsfe.com/a/c45babdc-9477-4a96-8b5c-7e97acf242f2/wirestory_0728a9b908be4667f60bbf261ae9caa7_16x9.jpg?w=1600",
      publishedAt: "2024-11-17T06:06:33Z",
      content:
        "NEW DELHI -- For many in New Delhi, one of the worlds most polluted cities, Lodhi Garden is an escape in the heart of Indias capital. Park regulars say they wont let rising pollution levels deter the… [+4106 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "The Associated Press",
      title:
        "Victoria Kjær Theilvig of Denmark is crowned the 73rd Miss Universe",
      description:
        "Victoria Kjær Theilvig of Denmark has been crowned Miss Universe",
      url: "https://abcnews.go.com/International/wireStory/victoria-kjr-theilvig-denmark-crowned-73rd-miss-universe-115939223",
      urlToImage:
        "https://i.abcnewsfe.com/a/ee920a5e-debf-4e2e-94b1-652cee5ba17f/wirestory_5e0101a9176caadd7aa710db4e603b48_16x9.jpg?w=1600",
      publishedAt: "2024-11-17T05:26:29Z",
      content:
        "MEXICO CITY -- Victoria Kjær Theilvig of Denmark has been crowned Miss Universe.\r\nKjaer, an animal protection advocate who works in the diamond selling business, beat out Miss Nigeria at the end of 7… [+859 chars]",
    },
  ],
};

export async function GET(request) {
  return NextResponse.json(data);
}
