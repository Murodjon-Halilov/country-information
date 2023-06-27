import "./Search-box.style.scss";
import CountryInformation from "../country-info/CountryInformation";
import { useState } from "react";
import CountryFilter from "../filter/CountryFilter";

const SearchBox = ({mode}) => {
  const [searchString, setSearchString] = useState("");
  const [option, setOption] = useState("All");

  const {appMode, darkMode} = mode

  const onSearchChange = (e) => {
    setSearchString(e.target.value.toLowerCase());
  };

  return (
    <div className="search-box-container">
      <div className="search-flex">
        <input
          type="search"
          className={`search-box ${appMode === darkMode ? 'dark-mode-for-any-box' : ''}`.trim()}
          placeholder="Search for a country"
          onChange={onSearchChange} 
        />
        <i className={`fa fa-search search-box-icon ${appMode === darkMode ? 'dark-mode-for-any-box' : ''}`.trim()} />

        <CountryFilter option={option} setOption={setOption} mode={mode} />
      </div>
      <CountryInformation searchString={searchString} option={option} mode={mode} />
    </div>
  );
};

export default SearchBox;
