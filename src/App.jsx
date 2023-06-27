import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/routes/home-page/Navigation";
import DetailCountry from "./components/routes/detail-page/DetailCountry";
import SearchBox from "./components/routes/home-page/search-box/SearchBox";
import { useState } from "react";

const lightMode = ["fa fa-moon light-mode", "Dark Mode"];
const darkMode = ["fa fa-sun dark-mode", "Light Mode"];

function App() {
  const [appMode, setAppMode] = useState(lightMode);

  const onChangeMode = () => {
    if (appMode === lightMode) {
      setAppMode(darkMode);
    } else {
      setAppMode(lightMode);
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Navigation mode={{ appMode, darkMode, onChangeMode }} />}
      >
        <Route
          index
          element={<SearchBox mode={{ appMode, darkMode, onChangeMode }} />}
        />
        <Route
          path="/:countryName"
          element={<DetailCountry mode={{ appMode, darkMode }} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
