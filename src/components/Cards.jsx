import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "./Darkmode";

function Cards({ countriesData }) {
  const { isDarkMode } = useDarkMode();
  return (
    <div className={isDarkMode ? "card-container card-DM" : "card-container"}>
      {countriesData.map((country, index) => (
        <Link to={`/details/${country.cca3}`} key={index} className="link">
          <div className="card" key={index}>
            <div className="card-img">
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className={isDarkMode ? "card-info cardInfo-DM":"card-info"}>
              <h2>{country.name.common}</h2>
              <p>
                <b>Population:</b> {country.population}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Subregion:</b> {country.subregion}
              </p>
              <p>
                <b>Capital:</b> {country.capital}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
