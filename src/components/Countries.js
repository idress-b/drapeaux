import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);

  const [selectedRadio, setSelectedRadio] = useState("");
  const [selectedSort, setSelectedSort] = useState("alphabet-az");
  const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => 
        setData(res.data)
      
     );
  }, []);

  return (
    <div className="countries">
      <div className="left-panel">
        <h1> Découvre le monde</h1>
        <h2>Trier Par :</h2>

        <div className="radio-container">
          <h3>Continent</h3>
          <ul>
            {radios.map((continent) => (
              <li key={continent}>
                <input
                  type="radio"
                  name="continentradio"
                  id={continent}
                  checked={continent === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.id)}
                />
                <label htmlFor={continent}>{continent}</label>
              </li>
            ))}
          </ul>
        </div>

        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>Reset</button>
        )}

        <div className="radio-container">
          <h3>Ordre :</h3>
          <ul>
            <li>
              <input
                type="radio"
                name="second-sort"
                id="alphabet-az"
                checked={selectedSort === "alphabet-az"}
                onChange={(e) => setSelectedSort(e.target.id)}
              />
              <label htmlFor="alphabet">Alphabétique A- Z</label>
            </li>
            <li>
              <input
                type="radio"
                name="second-sort"
                id="alphabet-za"
                checked={selectedSort === "alphabet-za"}
                onChange={(e) => setSelectedSort(e.target.id)}
              />
              <label htmlFor="alphabet">Alphabétique Z - A</label>
            </li>
            <li>
              <input
                type="radio"
                name="second-sort"
                id="population-croissante"
                checked={"population-croissante" === selectedSort}
                onChange={(e) => setSelectedSort(e.target.id)}
              />
              <label htmlFor="population">Population + au -</label>
            </li>
            <li>
              <input
                type="radio"
                name="second-sort"
                id="population-decroissante"
                checked={"population-decroissante" === selectedSort}
                onChange={(e) => setSelectedSort(e.target.id)}
              />
              <label htmlFor="population">Population - au +</label>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-panel">
        <ul>
          {data
            .filter((country) => country.continents[0].includes(selectedRadio))
            .sort((a, b) => {
              switch (selectedSort) {
                case "population-croissante":
                  return b.population - a.population;
               
                case "population-decroissante":
                  return a.population - b.population;
                
                case "alphabet-az":
                  /* permet de trier par ordre alphabétique en tenant compte de la ponctuation*/
                  return a.translations.fra.common.localeCompare(
                    b.translations.fra.common,
                    "fr",
                    { ignorePunctuation: true }
                  );
                
                case "alphabet-za":
                  return b.translations.fra.common.localeCompare(
                    a.translations.fra.common,
                    "fr",
                    { ignorePunctuation: true }
                  );
                 
                  default: return null;
              }
            })

            .map((country, index) => (
              <Card key={index} country={country} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
