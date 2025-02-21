import { createContext } from "react";

const Countrycontext = createContext({
  country: "",
  changeCountry: () => {},
});

export default Countrycontext;
