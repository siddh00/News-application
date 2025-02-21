import Marquee from "react-marquee-slider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import HeadlineCard from "./HeadlineCard";

const Topheadlines = (props) => {
  const { newsData } = props;
  // console.log(newsData);
  return (
    <div className="w-11/12">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl pl-2 border-l-4 border-[#209920] font-medium">
          Top Headlines
        </h1>
        <ArrowForwardIosIcon
          sx={{ fontSize: 40 }}
          className="rounded-md p-2 drop-shadow-sm hover:bg-gray-50"
        />
      </div>
      <div className="w-full overflow-hidden h-72">
        <Marquee velocity={30} minScale={0.7} resetAfterTries={200}>
          {newsData.map((item, index) => (
            <HeadlineCard key={index} newsDetails={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Topheadlines;
