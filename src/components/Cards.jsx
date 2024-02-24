import React from 'react';

function Cards({ countriesData }) {
  return (
    <div className='card-container'>
      {countriesData.map((country, index) => (
        <div key={index} className='card'>
          <div className='card-img'>
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
      ))}
    </div>
  );
}

export default Cards;





