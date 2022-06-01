import React, { useState } from "react";
import PopupDetailsCountry from "./PopupDetailsCountry";

const Card = ({ country }) => {
  const [isDetailRendered, setIsDetailRendered] = useState(false);
  return (
    <>
      <PopupDetailsCountry trigger={isDetailRendered} country={country}>
        <button onClick={(e) => setIsDetailRendered(false)}>fermer</button>
      </PopupDetailsCountry>

      {isDetailRendered && (
        <div
          className="overlay"
          onClick={(e) => setIsDetailRendered(false)}
        ></div>
      )}

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
