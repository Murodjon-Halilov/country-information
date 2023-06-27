import { Link } from "react-router-dom";

const CountryBox = ({ country, mode }) => {
  const countryInfor = {
    flag: country?.flags.png,
    countryName: country?.name.common,
    population: country?.population,
    region: country?.region,
    capital: country?.capital,
  };

  const { appMode, darkMode } = mode;

  return (
    <div className="country-box">
      <Link
        to={`${country.name.common}`}
        className={`country-link-box ${
          appMode === darkMode ? "dark-mode-for-any-box" : ""
        }`.trim()}
      >
        <img
          src={countryInfor.flag}
          alt=""
          className="country-box-img"
          data-country-box={countryInfor.countryName}
        />
        <div
          className="country-box-informations"
          data-country-box={countryInfor.countryName}
        >
          <h1
            className="country-box-country-name"
            data-country-box={countryInfor.countryName}
          >
            {countryInfor.countryName}
          </h1>
          <p
            className="country-box-country-info"
            data-country-box={countryInfor.countryName}
          >
            Population:{" "}
            <span
              className="country-box-country-info-info"
              data-country-box={countryInfor.countryName}
            >
              {countryInfor.population}
            </span>
          </p>
          <p
            className="country-box-country-info"
            data-country-box={countryInfor.countryName}
          >
            Region:{" "}
            <span
              className="country-box-country-info-info"
              data-country-box={countryInfor.countryName}
            >
              {countryInfor.region}
            </span>
          </p>
          <p
            className="country-box-country-info"
            data-country-box={countryInfor.countryName}
          >
            Capital:{" "}
            <span
              className="country-box-country-info-info"
              data-country-box={countryInfor.countryName}
            >
              {countryInfor.capital}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CountryBox;
