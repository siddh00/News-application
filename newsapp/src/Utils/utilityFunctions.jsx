import { useState, useEffect } from "react";

export const useNewsData = () => {
  const [loader, setLoader] = useState(true);
  const [topHeadlinesData, setTopHeadlinesData] = useState([]);
  const [businessNewsData, setbusinessNewsData] = useState([]);
  const [entertainmentNewsData, setentertainmentNewsData] = useState([]);
  const [healthNewsData, sethealthNewsData] = useState([]);
  const [scienceNewsData, setscienceNewsData] = useState([]);
  const [sportsNewsData, setsportsNewsData] = useState([]);
  const [technologyNewsData, settechnologyNewsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    makeApiCall();
  }, []);

  const makeApiCall = () => {
    Promise.all([
      topHeadlinesApicall(),
      businessApicall(),
      entertainmentApicall(),
      healthApicall(),
      scienceApicall(),
      sportsApicall(),
      technologyApicall(),
    ])
      .then((responseArray) => {
        responseArray.forEach((obj) => {
          if (obj.status !== "ok") {
            throw new Error("Failed to fetch");
          }
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoader(false));
  };

  const topHeadlinesApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=49e0682e2f7b4db48963ae769637f535"
    );
    const data = await res.json();
    // const firstTenNews = data.articles.slice(0, 10);
    setTopHeadlinesData([...data.articles]);
    // setNewsData([...firstTenNews]);
    return data;
  };

  const businessApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d75224ef19cd42bda5237062e90e6c25"
    );
    const data = await res.json();

    // console.log(data.articles);

    setbusinessNewsData([...data.articles]);
    return data;
  };

  const entertainmentApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=d75224ef19cd42bda5237062e90e6c25"
    );
    const data = await res.json();
    // console.log(data.articles);

    setentertainmentNewsData([...data.articles]);
    return data;
  };

  const healthApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=d75224ef19cd42bda5237062e90e6c25"
    );
    const data = await res.json();
    // console.log(data.articles);

    sethealthNewsData([...data.articles]);
    return data;
  };

  const scienceApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=d75224ef19cd42bda5237062e90e6c25"
    );
    const data = await res.json();
    // console.log(data.articles);

    setscienceNewsData([...data.articles]);
    return data;
  };

  const sportsApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d75224ef19cd42bda5237062e90e6c25"
    );
    const data = await res.json();
    // console.log(data.articles);

    setsportsNewsData([...data.articles]);
    return data;
  };

  const technologyApicall = async () => {
    const res = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=d75224ef19cd42bda5237062e90e6c25"
    );
    const data = await res.json();
    // console.log(data.articles);

    settechnologyNewsData([...data.articles]);
    return data;
  };

  console.log("loader" + loader);
  console.log("topheadlines" + topHeadlinesData);
  console.log("business" + businessNewsData);
  console.log("health" + healthNewsData);
  console.log("sports" + sportsNewsData);
  console.log("tech" + technologyNewsData);
  console.log("science" + scienceNewsData);
  console.log("entertainment" + entertainmentNewsData);

  return [
    loader,
    topHeadlinesData,
    businessNewsData,
    healthNewsData,
    sportsNewsData,
    technologyNewsData,
    scienceNewsData,
    entertainmentNewsData,
    error,
  ];
};
