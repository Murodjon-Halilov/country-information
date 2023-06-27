import "./CountryInformation.style.scss";
import CountryBox from "./CountryBox";
import { useState, useEffect } from "react";

const CountryInformation = ({ searchString, option, mode }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const searchedCountry = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchString)
  );

  const regions = {
    Africa: [],
    Americas: [],
    Asia: [],
    Europe: [],
    Oceania: [],
  };

  regions.Africa.push(
    ...countries.filter((country) => country.region === "Africa")
  );
  regions.Americas.push(
    ...countries.filter((country) => country.region === "Americas")
  );
  regions.Asia.push(
    ...countries.filter((country) => country.region === "Asia")
  );
  regions.Europe.push(
    ...countries.filter((country) => country.region === "Europe")
  );
  regions.Oceania.push(
    ...countries.filter((country) => country.region === "Oceania")
  );

  return (
    <div className="main-country-box">
      {option !== "All"
        ? regions[option].map((country) => (
            <CountryBox
              key={country.name.common}
              country={country}
              mode={mode}
            />
          ))
        : searchedCountry.map((country) => (
            <CountryBox
              key={country.name.common}
              country={country}
              mode={mode}
            />
          ))}
    </div>
  );
};

export default CountryInformation;
