import "./DetailCountry.style.scss";
import {Link} from 'react-router-dom';
import "../home-page/Navigation.style.scss";

const DetailCountry = ({mode, country}) => {
  const {appMode, darkMode} = mode;


  console.log(country);

  return (
    <div className="detail-page">
        <Link to="/" className={`back-btn ${appMode === darkMode ? 'dark-mode-light' : ''}`.trim()}>
            <i className="fa fa-arrow-left"></i> Back
        </Link>
    </div>
  )
}

export default DetailCountry