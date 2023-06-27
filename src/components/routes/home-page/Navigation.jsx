import { Outlet } from "react-router-dom";
import "./Navigation.style.scss";



const Home = ({mode}) => {

  const {appMode, darkMode, onChangeMode} = mode

  return (
    <div className={`main-container ${appMode === darkMode ? 'dark-mode' : ''}`.trim()}>
      <header className={`header ${appMode === darkMode ? 'dark-mode-light' : ''}`.trim()}>
        <h1 className="header__name">Where in the world?</h1>
        <button
          type="button"
          className={`header__mode-switch-button ${appMode === darkMode ? 'dark-mode-light' : ''}`.trim()}
          onClick={onChangeMode}
        >
          <i className={`${appMode[0]} ${appMode === darkMode ? 'dark-mode-light' : ''}`.trim()}></i> {appMode[1]}
        </button>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
