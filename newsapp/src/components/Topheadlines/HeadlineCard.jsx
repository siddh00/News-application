import defaultNewsImg from "../../assets/Orange Minimalist Travel App Business Logo.png";

const HeadlineCard = (props) => {
  //   console.log(props);
  const { newsDetails } = props;
  const { title, publishedAt, url, urlToImage } = newsDetails;
  // const imgUrl = urlToImage === null ? defaultNewsImg : urlToImage;
  const imgUrl = urlToImage ? urlToImage : defaultNewsImg;
  const maxLength = 45;
  const truncateText =
    title.length > maxLength ? title.substring(0, maxLength) : title;

  // const imgUrl = () => {
  //   if (urlToImage === null || urlToImage === "") {
  //     return defaultNewsImg;
  //   }
  //   return urlToImage;
  // };

  const dateAndTime = () => {
    const readableDate = new Date(publishedAt);
    const current = new Date();
    const timeDifference = current - readableDate;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 30);
    const years = Math.floor(months / 365);

    if (years > 0) {
      return `${years} year${years > 1 ? "s" : ""} ago`;
    } else if (months > 0) {
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
    } else if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else {
      return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    }
  };

  // const readableDate = new Date(publishedAt).toLocaleDateString();
  // const readableTime = new Date(publishedAt).toLocaleTimeString();
  // const readableDateandTime = new Date(publishedAt).toLocaleString();
  // console.log(truncateText);
  //   console.log(title.length > maxLength);
  //   const maxLen = 100;
  //   const truncateText = () => {
  //     const titleLength = title.length;

  //     return titleLength > maxLen ? title.substring(0, maxLen) : title;
  //   };

  return (
    <div className="flex flex-col justify-start items-center p-3 w-56 h-full mr-2 border border-solid shadow-md">
      <img src={imgUrl} alt="newsimage" className="w-full shadow mb-2 h-32" />
      <h1 className="text-xl text-left overflow-hidden flex-grow-1 text-ellipsis w-full whitespace-normal">
        {`${truncateText}...`}
      </h1>
      <p className="pt-3 text-sm self-end">{dateAndTime()}</p>
    </div>
  );
};

export default HeadlineCard;
