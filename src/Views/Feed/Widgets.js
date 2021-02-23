import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Widgets.scss";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const newsAr = [
  {
    source: {
      id: null,
      name: "The Capitol Fax Blog",
    },
    author: null,
    title:
      "Your Illinois News Radar » ILGOP on Welch: “Travesty for the people of Illinois” - The Capitol Fax Blog",
    description: null,
    url:
      "https://capitolfax.com/2021/01/13/ilgop-on-welch-travesty-for-the-people-of-illinois/",
    urlToImage: null,
    publishedAt: "2021-01-13T18:33:45Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "WYFF4 Greenville",
    },
    author: "Katie Smithson",
    title:
      "Problems reported as South Carolina opens vaccine appointments for those 70 and older - WYFF4 Greenville",
    description:
      "WYFF News 4 is aware of reports that the phone number is periodically not working when people call the above phone number. We have reached out to DHEC for information about those issues.",
    url:
      "https://www.wyff4.com/article/problems-reported-as-south-carolina-opens-vaccine-appointments-for-those-70-and-older/35201987",
    urlToImage:
      "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/covid19-vaccine-1607955617.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    publishedAt: "2021-01-13T18:03:00Z",
    content:
      "GREENVILLE, S.C. —Viewers reported issues Wednesday morning, as appointments opened up for any South Carolina resident aged 70 or older, regardless of health status or preexisting conditions, to rece… [+2267 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Zachary Cohen and Geneva Sands, CNN",
    title:
      "20,000 National Guard troops expected in Washington for Biden's inauguration - CNN",
    description:
      "More than 20,000 National Guard members could be in the nation's capital to help secure President-elect Joe Biden's inauguration, Washington, DC, Police Chief Robert Contee said Wednesday, as sources tell CNN that officials are considering raising the terrori…",
    url:
      "https://www.cnn.com/2021/01/13/politics/inauguration-security-us-secret-service-washington/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210113115739-inauguration-prep-0112-super-tease.jpg",
    publishedAt: "2021-01-13T17:39:00Z",
    content:
      "Washington (CNN)More than 20,000 National Guard members could be in the nation's capital to help secure President-elect Joe Biden's inauguration, Washington, DC, Police Chief Robert Contee said Wedne… [+5437 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "James Harden 'wants out by any means necessary' - Stephen A. on Harden and the Rockets | First Take - ESPN",
    description:
      "Stephen A. Smith and Max Kellerman discuss James Harden's future with the Rockets after he said the team is \"just not good enough\" following Houston's loss t...",
    url: "https://www.youtube.com/watch?v=O7susBgWLhU",
    urlToImage: "https://i.ytimg.com/vi/O7susBgWLhU/maxresdefault.jpg",
    publishedAt: "2021-01-13T17:37:12Z",
    content: null,
  },
  {
    source: {
      id: "the-verge",
      name: "The Verge",
    },
    author: "Andrew Webster",
    title: "Hogwarts Legacy is delayed until 2022 - The Verge",
    description:
      "Harry Potter spinoff Hogwarts Legacy, an open-world RPG, has been delayed to 2022, when it will launch on PC, PS5, PS4, Xbox One, and Xbox Series X.",
    url:
      "https://www.theverge.com/2021/1/13/22229085/hogwarts-legacy-delay-2022-release-date",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/mAjTrC2J6q6N8cKCrEWmCG8y9DI=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22232944/EnIVQHKUYAEGfed.jpg",
    publishedAt: "2021-01-13T17:23:35Z",
    content:
      "We are giving the game the time it needs\r\nOne of the years biggest games has been delayed. Today, Warner Bros. announced that Hogwarts Legacy an open-world, action roleplaying game set in the Harry P… [+659 chars]",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Jack Guy, CNN",
    title: "There's a case of wine heading back to Earth from space - CNN",
    description:
      "A SpaceX Dragon capsule started its journey back to Earth from the International Space Station (ISS) Tuesday with an unusual cargo: 12 bottles of wine and 320 grapevines.",
    url:
      "https://www.cnn.com/2021/01/13/world/spacex-wine-space-mission-scli-intl-scn/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210113114832-02-spacex-dragon-undocking-iss-0112---screenshot-super-tease.jpg",
    publishedAt: "2021-01-13T17:15:00Z",
    content: null,
  },
  {
    source: {
      id: "nbc-news",
      name: "NBC News",
    },
    author: "David K. Li, Shamar Walters, Polly DeFrank, Pete Williams",
    title:
      "Man in 'Camp Auschwitz' shirt, photographed at U.S. Capitol riot, arrested in Virginia - NBC News",
    description:
      "Robert Keith Packer, who was photographed in 'Camp Auschwitz' shirt at the U.S. Capitol riot, has been arrested in Newport News, Virginia.",
    url:
      "https://www.nbcnews.com/news/us-news/man-camp-auschwitz-shirt-photographed-u-s-capitol-riot-arrested-n1254070",
    urlToImage:
      "https://media1.s-nbcnews.com/j/newscms/2021_02/3441765/210113-capitol-riot-auschwitz-shirt-mn-1005_4852ea3a12ecab5754cd7899dd2299df.nbcnews-fp-1200-630.jpg",
    publishedAt: "2021-01-13T17:10:00Z",
    content:
      'The man wearing a "Camp Auschwitz" shirt who was photographed at last week\'s deadly pro-Trump riot at the U.S. Capitol, was arrested in Virginia on Wednesday, officials said.\r\nRobert Keith Packer, a … [+2394 chars]',
  },
  {
    source: {
      id: null,
      name: "KRDO",
    },
    author: "Zachary Aedo",
    title:
      "Rep. Lauren Boebert says Twitter account locked until Inauguration Day - KRDO",
    description:
      "COLORADO SPRINGS, Colo. (KRDO) -- Rep. Lauren Boebert's says Twitter has locked her account for nearly a week until the end of Inauguration Day. Twitter said the Colorado Republican had tweets that \"violated the Twitter Rules\" but didn't specify which ones, a…",
    url:
      "https://krdo.com/news/2021/01/13/lauren-boeberts-twitter-account-locked-until-inauguration-day/",
    urlToImage: "https://krdo.b-cdn.net/2021/01/boebert-twitter-locked-out.jpg",
    publishedAt: "2021-01-13T17:04:20Z",
    content:
      "COLORADO SPRINGS, Colo. (KRDO) -- Rep. Lauren Boebert's says Twitter has locked her account for nearly a week until the end of Inauguration Day. \r\nTwitter said the Colorado Republican had tweets that… [+1332 chars]",
  },
  {
    source: {
      id: "the-hill",
      name: "The Hill",
    },
    author: "Rebecca Klar",
    title:
      "Amazon cites death threats in push to keep Parler offline | TheHill - The Hill",
    description:
      "Amazon is urging a judge to keep the social media platform Parler...",
    url:
      "https://thehill.com/policy/technology/534033-amazon-cites-death-threats-in-push-to-keep-parler-offline",
    urlToImage:
      "https://thehill.com/sites/default/files/social-media_070220getty_parler.jpg",
    publishedAt: "2021-01-13T17:03:40Z",
    content:
      "Amazon is urging a judge to keep the social media platform Parler offline, citing a series of death threats against top tech executives and elected officials posted to the site ahead of last week's d… [+4232 chars]",
  },
  {
    source: {
      id: null,
      name: "Slate Magazine",
    },
    author: "Dana Stevens",
    title:
      "HBO Max’s COVID Heist Rom-Com Has Too Much Rom-Com, Not Enough Heist - Slate",
    description: "Is Locked Down any good? That’s complicated.",
    url:
      "https://slate.com/culture/2021/01/locked-down-review-hbo-max-pandemic-heist-movie.html",
    urlToImage:
      "https://compote.slate.com/images/987a4ff5-71d0-40b7-9b5d-d44cda9d8a4f.jpeg?width=780&height=520&rect=1619x1079&offset=154x0",
    publishedAt: "2021-01-13T17:00:00Z",
    content:
      "Its probably impossible to deliver a clearheaded verdict on one of the first movies set during the coronavirus pandemic while still living through that same crisis. History will have to judge whether… [+6144 chars]",
  },
  {
    source: {
      id: null,
      name: "New York Times",
    },
    author: "Marie Fazio",
    title: "Pet Food Recall is Expanded After 70 Dogs Die - The New York Times",
    description:
      "Midwestern Pet Foods Inc. expanded a voluntary recall after fatal levels of a toxin produced by mold were found in some of its products, the F.D.A. said.",
    url: "https://www.nytimes.com/2021/01/13/us/fda-pet-food-recall.html",
    urlToImage:
      "https://static01.nyt.com/images/2021/01/13/multimedia/13xp-credit2/merlin_182006016_486fd434-989a-4aa6-9561-8de17e3ad295-facebookJumbo.jpg",
    publishedAt: "2021-01-13T16:50:00Z",
    content:
      "The company said it was expanding the recall out of an abundance of caution. The F.D.A. said its investigation was ongoing and that not all of the suspected cases of aflatoxin poisoning had been conf… [+749 chars]",
  },
  {
    source: {
      id: null,
      name: "Sports Illustrated",
    },
    author: "Ryan Kennedy",
    title: "Welcome to the 2020-21 NHL Season - Sports Illustrated",
    description:
      "Need a refresher? How about some power rankings? We've got you covered.",
    url: "https://www.si.com/hockey/news/welcome-to-the-nhl-season",
    urlToImage:
      "https://www.si.com/.image/t_share/MTc4MTkzNzM5MjMwMDI5NDIx/usatsi_14165088_168393426_lowres.jpg",
    publishedAt: "2021-01-13T16:10:00Z",
    content:
      "Nathan MacKinnon shoots on Jonathan Quick. Photo by Gary A. Vasquez-USA TODAY Sports.\r\nHockey is a game of numbers, right? So, with that in mind, consider this: Starting tonight, the NHL will have at… [+9954 chars]",
  },
  {
    source: {
      id: null,
      name: "AnandTech",
    },
    author: "Gavin Bonshor",
    title:
      "CES 2021: ASUS ROG Unveils Updated Zephyrus G14 for 2021 - AnandTech",
    description:
      "During CES 2021&#39;s all-digital trade show, ASUS has unveiled its updated ROG Zephyrus G14 model for 2021. The new Zephyrus G14 uses AMD&#39;s latest...",
    url:
      "https://www.anandtech.com/show/16387/ces-2021-asus-rog-unveils-updated-zephyrus-g14-for-2021",
    urlToImage:
      "https://images.anandtech.com/doci/16387/G14-web-04-05-2021_678x452.jpg",
    publishedAt: "2021-01-13T16:00:00Z",
    content:
      "During CES 2021's all-digital trade show, ASUS has unveiled its updated ROG Zephyrus G14 model for 2021. The new Zephyrus G14 uses AMD's latest 5000 series mobile processor, with its ANiME Matrix LED… [+1377 chars]",
  },
  {
    source: {
      id: null,
      name: "Science Magazine",
    },
    author: null,
    title:
      "The legendary dire wolf may not have been a wolf at all - Science Magazine",
    description:
      "North America’s “top dog” traveled a lonely evolutionary path",
    url:
      "https://www.sciencemag.org/news/2021/01/legendary-dire-wolf-may-not-have-been-wolf-all",
    urlToImage:
      "https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/Dire_wolves_1280x720.jpg?itok=7DagHFJB",
    publishedAt: "2021-01-13T16:00:00Z",
    content:
      "Dire wolves (red) fight off gray wolves for dibs on a bison kill in this artists reconstruction.\r\nMauricio Antón \r\nBy David GrimmJan. 13, 2021 , 11:00 AM\r\nOne of North Americas most famous ancient pr… [+5325 chars]",
  },
  {
    source: {
      id: null,
      name: "The Athletic",
    },
    author: "Sam Amick",
    title:
      "When will NBA players get vaccine? NBA COVID news updates - The Athletic",
    description:
      "Sam Amick's weekly notebook column has reaction from coaches around the NBA on the realities of COVID-19 in the NBA right now.",
    url:
      "https://theathletic.com/2319903/2021/01/13/nba-covid-19-vaccines-nba-covid-news-updates/",
    urlToImage:
      "https://cdn.theathletic.com/app/uploads/2021/01/13092833/GettyImages-1296075311-2-scaled-e1610548148156-1024x512.jpg",
    publishedAt: "2021-01-13T15:59:39Z",
    content:
      "At least the bubble basketball was fun.Once you got in the arena, you knew that everyone who was there had tested negative and was hermetically sealed, so to speak, inside that Disney World environme… [+764 chars]",
  },
  {
    source: {
      id: "polygon",
      name: "Polygon",
    },
    author: "Petrana Radulovic",
    title:
      "To All The Boys: Always and Forever trailer finishes the Netflix series - Polygon",
    description:
      "Lara (Lana Condor) and Peter (Noah Centineo) conclude their senior year — will Lara get into Stanford to be with Peter? Is that what she even wants? The finale of the To All The Boys series hits Netflix on February 12.",
    url:
      "https://www.polygon.com/2021/1/13/22228780/to-all-the-boys-always-and-forever-netflix-trailer-release-date",
    urlToImage:
      "https://cdn.vox-cdn.com/thumbor/-NYAv6xuWPWWyfQuwyHAF_o9y54=/0x129:1800x1071/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22232681/ErntqUGVkAE2tGs.jpeg",
    publishedAt: "2021-01-13T15:44:00Z",
    content: "The bittersweetness of senior year",
  },
  {
    source: {
      id: "cnn",
      name: "CNN",
    },
    author: "Chris Isidore, CNN Business",
    title:
      "New York City moves to end contracts with the Trump Organization - CNN",
    description:
      "New York City is seeking to terminate its business relationships with the Trump Organization in response to last week's attack on the US Capitol.",
    url:
      "https://www.cnn.com/2021/01/13/business/trump-new-york-city-contracts/index.html",
    urlToImage:
      "https://cdn.cnn.com/cnnnext/dam/assets/210113085923-01-donald-trump-0112-super-tease.jpg",
    publishedAt: "2021-01-13T15:37:00Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "CNBC",
    },
    author: "Jacob Pramuk",
    title:
      "House to impeach Trump for inciting Capitol attack as more Republicans get on board - CNBC",
    description:
      "Trump will become the only U.S. president impeached twice, just days before President-elect Joe Biden's inauguration.",
    url:
      "https://www.cnbc.com/2021/01/13/house-to-impeach-trump-for-inciting-capitol-riot.html",
    urlToImage:
      "https://image.cnbcfm.com/api/v1/image/106823074-1610467798518-gettyimages-1230548306-TRUMP-DEPARTS.jpg?v=1610467813",
    publishedAt: "2021-01-13T15:30:00Z",
    content:
      "President Donald Trump, a man hyperaware of his achievements and place in history, will add a first to his record on Wednesday.\r\nSeven days before the president leaves office, the House plans to char… [+4892 chars]",
  },
  {
    source: {
      id: null,
      name: "YouTube",
    },
    author: null,
    title:
      "Best TVs at CES 2021 | Samsung Q900 NEO QLED, Sony Z9J, LG G1 OLED, TCL 6-Series, More - Digital Trends",
    description:
      "Each year, we wind our way through Las Vegas to find the best TVs at CES. This year was a bit different, but we still got to see the best from Samsung, LG, S...",
    url: "https://www.youtube.com/watch?v=YkpNL2A5np0",
    urlToImage: "https://i.ytimg.com/vi/YkpNL2A5np0/maxresdefault.jpg",
    publishedAt: "2021-01-13T15:15:01Z",
    content: null,
  },
  {
    source: {
      id: null,
      name: "fox8.com",
    },
    author: "Nexstar Media Wire",
    title:
      "Dollar General will pay its 157,000 workers to get COVID-19 vaccine - WJW FOX 8 News Cleveland",
    description:
      "Dollar General employees will receive four hours of pay if they choose to get the COVID-19 vaccine.",
    url:
      "https://fox8.com/news/dollar-general-will-pay-its-157000-workers-to-get-covid-19-vaccine/",
    urlToImage:
      "https://fox8.com/wp-content/uploads/sites/12/2021/01/dg.jpg?w=1280",
    publishedAt: "2021-01-13T14:58:00Z",
    content:
      "GOODLETTSVILLE, Tenn. (NEXSTAR) — Dollar General employees will receive four hours of pay if they choose to get the COVID-19 vaccine, according to a report from the Wall Street Journal.\r\nThe retailer… [+3564 chars]",
  },
];

const Widgets = () => {
  const [news, setNews] = useState([]);
  const fetchUrl =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=b34b20e53d8e47a99ebd125a099af90c";

  useEffect(() => {
    const fetchData = async () => {
      // const request = await axios.get(fetchUrl);

      // setNews(request.data.articles);
      // console.log("===================>", request.data.articles);
      // return request;
      setNews(newsAr);
    };
    fetchData();
  }, []);

  const newsArticle = (heading, subtitle) => (
    <div className="Widgets_articles">
      <div className="widgets_articlesLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {news
        ?.slice(0, 12)
        .map(({ author, title, description, source: { name } }) => (
          <React.Fragment key={`key_${author}${title}`}>
            {newsArticle(`${title}`, `${description || author}`)}
          </React.Fragment>
        ))}
    </div>
  );
};

export default Widgets;
