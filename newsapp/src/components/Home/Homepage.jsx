import { useState } from "react";
import Topheadlines from "../Topheadlines/Topheadlines";
import BeatLoader from "react-spinners/BeatLoader";
import { useNewsData } from "../../Utils/utilityFunctions";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  const [
    loader,
    topHeadlinesData,
    businessNewsData,
    healthNewsData,
    sportsNewsData,
    technologyNewsData,
    scienceNewsData,
    entertainmentNewsData,
    error,
  ] = useNewsData();

  // console.log("loader" + loader);
  // console.log("topheadlines" + topHeadlinesData);
  // console.log("business" + businessNewsData);
  // console.log("health" + healthNewsData);
  // console.log("sports" + sportsNewsData);
  // console.log("tech" + technologyNewsData);
  // console.log("science" + scienceNewsData);
  // console.log("entertainment" + entertainmentNewsData);

  const loaderComponent = () => {
    return (
      <div className="flex justify-center items-center">
        {
          <BeatLoader
            color="#75b4cf"
            loading
            margin={6}
            size={25}
            speedMultiplier={1}
          />
        }
      </div>
    );
  };

  const contentComponent = () => {
    return (
      <>
        <Topheadlines newsData={topHeadlinesData} />
      </>
    );
  };

  // console.log(newsData)
  return loader ? loaderComponent() : contentComponent();
};

export default Homepage;
