import "./CountryFilter.style.scss";

const CountryFilter = ({ option, setOption, mode }) => {
  const {appMode, darkMode} = mode
  return (
    <div className="filter-box">
      <select
        className={`select-element ${appMode === darkMode ? 'dark-mode-for-any-box' : ''}`.trim()}
        value={option}
        onChange={(e) => setOption(e.target.value)}
      >
        <option className="filter-option">All</option>
        <option className="filter-option" value="Africa">
          Africa
        </option>
        <option className="filter-option" value="Americas">
          America
        </option>
        <option className="filter-option" value="Asia">
          Asia
        </option>
        <option className="filter-option" value="Europe">
          Europe
        </option>
        <option className="filter-option" value="Oceania">
          Oceania
        </option>
      </select>

      <i className="fa fa-angle-down icon-filter"></i>
    </div>
  );
};

export default CountryFilter;
