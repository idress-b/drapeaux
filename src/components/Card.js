import React, { useState } from "react";

const Card = ({ country }) => {
  const [isDetailRendered, setIsDetailRendered] = useState(false);
  return (
    <>
      
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
