import "./DetailCountry.style.scss";
import { Link, useParams } from "react-router-dom";
import "../home-page/Navigation.style.scss";
import { useState, useEffect } from "react";

const DetailCountry = ({ mode }) => {
  const { countryName } = useParams();
  const { appMode, darkMode } = mode;

  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);

  const countryInfor = {
    flag: country[0]?.flags.png,
    countryName: country[0]?.name.common,
    population: country[0]?.population,
    region: country[0]?.region,
    subRegion: country[0]?.subregion,
    capital: country[0]?.capital,
    domain: country[0]?.tld,
  };

  return (
    <div
      className={`detail-page ${
        appMode === darkMode ? "dark-mode" : ""
      }`.trim()}
    >
      <Link
        to="/"
        className={`back-btn ${
          appMode === darkMode ? "dark-mode-light" : ""
        }`.trim()}
      >
        <i className="fa fa-arrow-left"></i> Back
      </Link>

      <div className="detail-page-flex">
        <img
          src={countryInfor.flag}
          alt={countryInfor.capital}
          className="detail-page-country-img"
        />

        <div className="not-df">
            <div className="country-info-box">
              <div>
                <h1 className="detail-page-country-name">
                  {countryInfor.countryName}
                </h1>

                <p className="country-information">
                  Native Name: <span className="country-information-span">{country[0]?.name?.nativeName ? Object.values(country[0]?.name?.nativeName)[0].common : countryInfor.countryName}</span>
                </p>
                <p className="country-information">
                  Population: <span className="country-information-span">{countryInfor.population}</span>
                </p>
                <p className="country-information">
                  Region: <span className="country-information-span">{countryInfor.region}</span>
                </p>
                <p className="country-information">
                  Sub Region: <span className="country-information-span">{countryInfor.subRegion}</span>
                </p>
                <p className="country-information">
                  Capital: <span className="country-information-span">{countryInfor.capital}</span>
                </p>
              </div>

              <div className="information-plus">
                <p className="country-information">Top Level Domain: <span className="country-information-span">{countryInfor.domain}</span></p>
                <p className="country-information">Currencies: <span className="country-information-span">{country[0]?.currencies ? Object.entries(country[0]?.currencies)[0][1].name : "$"}</span></p>
                <p className="country-information">Languages: <span className="country-information-span">{country[0] ? `${Object.values(country[0].languages).join(', ')}` : "Eng"}</span></p>
              </div>
            </div>

            <div className="border-countries">
              <p className="country-information">Border Countries: </p> <span className="border-country">{country[0] ? country[0]?.borders.join(', ') : 'Not Found!'}</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default DetailCountry;
