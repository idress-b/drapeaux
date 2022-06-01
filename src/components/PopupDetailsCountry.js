import React from "react";

const PopupDetailsCountry = ({ trigger, country, children }) => {
  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <h1>Fiche Pays</h1>
        <h2>{country.translations.fra.common}</h2>

        <img
          width="150"
          src={country.flags.svg}
          alt={"drapeau " + country.translations.fra.common}
        />
        <p>Capitale: {country.capital}</p>
        <p>Population: {country.population.toLocaleString()} habitants</p>
        <p>Superficie: {country.area.toLocaleString()} Km²</p>
        <p>Continent: {country.continents}</p>

        {/* affiche la monniae ou les monnaies du pays avec une condition initiale pour éviter de maper un objet inexistant */}
        {country.currencies ? (
          <p>
            Monnaie(s) :
            {Object.values(country.currencies).map(
              (c) => `${c.name} ${c.symbol}`
            )}{" "}
          </p>
        ) : (
          ""
        )}

        <p>
          Langue(s) utilisée(s) :{Object.values(country.languages).join(", ")}
        </p>

        {/* -->>> permet d'afficher le bouton injecté comme enfant au composant */}
        {children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default PopupDetailsCountry;
