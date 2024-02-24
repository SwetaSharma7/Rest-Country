import React from 'react';
import { Link } from "react-router-dom";

function Cards({ countriesData }) {
  return (
    <div className='card-container'>
      {countriesData.map((country, index) => (
        <Link to={`/details/${country.cca3}`} key={index} className="link">
          <div className='card' key={index}>
            <div className='card-img'>
              {/* Access the flag using country.flags.png */}
              <img src={country.flags.png} alt={country.name.common} />
            </div>
            <div className='card-info'>
              <h2>{country.name.common}</h2>
              <p>Population: {country.population}</p>
              <p>Region: {country.region}</p>
              <p>Subregion: {country.subregion}</p>
              <p>Capital: {country.capital}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
