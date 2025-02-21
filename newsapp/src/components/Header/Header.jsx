import { useState } from "react";
import img from "../../assets/logo.png";
import { CountryIds } from "../../Utils/CountryData";

const Header = () => {
  const [countryVal, setCounttryVal] = useState("");

  const handleCountryVal = (event) => {
    setCounttryVal(event.target.val);
  };

  return (
    <div className="w-full px-14 py-4 mb-10 flex justify-between items-center">
      <div className="">
        <img src={img} alt="applogo" className="h-20 w-[72px]" />
      </div>
      <div className="">
        <select
          value={countryVal}
          onChange={handleCountryVal}
          id="country"
          className="overflow-y-auto"
        >
          {CountryIds.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
