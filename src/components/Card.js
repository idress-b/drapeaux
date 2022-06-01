import React, { useState } from "react";
import PopupDetailsCountry from './PopupDetailsCountry';

const Card = ({ country }) => {
  const [isDetailRendered, setIsDetailRendered] = useState(false);
  return (
    <>
      <PopupDetailsCountry trigger={isDetailRendered}>
      <h1>Fiche Pays</h1>
     <h2>{country.translations.fra.common}</h2>
      
      <img width="150"
          src={country.flags.svg}
          alt={"drapeau " + country.translations.fra.common}
        />
       <p>Capitale: {country.capital}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Continent: {country.continents}</p>
        {/* <p>Monnaie: {Object.keys(country.currencies)[0] && Object.keys(country.currencies)[0] }</p> */}
      <button onClick={(e)=>setIsDetailRendered(false)}>fermer</button>
      </PopupDetailsCountry>
      <li className="card" onClick={(e) => setIsDetailRendered(true)}>
        <img
          src={country.flags.svg}
          alt={"drapeau " + country.translations.fra.common}
        />
        <div className="infos">
          <h2>{country.translations.fra.common}</h2>
          <h4>{country.capital}</h4>
          <p>Pop. {country.population.toLocaleString()}</p>
        </div>
       
      </li>
    </>
  );
};

export default Card;
