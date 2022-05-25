import axios from 'axios';
import React, { useEffect, useState } from 'react';

import Card from './Card';


const Countries = () => {
    const [data, setData] = useState([])
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const [selectedSort, setSelectedSort] = useState('population')
    const radios = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];



    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, [])


    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)} />
                {radios.map((continent) =>
                    <li key={continent}>
                        <input
                            type="radio"
                            name="continentradio"
                            id={continent}
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)} />
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                )}
            </ul>
            <ul className="radio-container">
                <li>Trier par :</li>
                <li>
                    <input type="radio"
                        name="second-sort"
                        id="population"
                        checked={"population" === selectedSort}
                        onChange={(e) => setSelectedSort(e.target.id)}
                    />
                    <label htmlFor="population">population</label>
                </li>
                <li>
                    <input type="radio"
                        name="second-sort"
                        id="alphabet"
                        checked={selectedSort === "alphabet"}
                        onChange={(e) => setSelectedSort(e.target.id)}
                    />
                    <label htmlFor="alphabet">Odre Alphabétique</label>
                </li>
            </ul>
            {selectedRadio && (<button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>)}
            <ul>

                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .slice(0, rangeValue)
                    .sort((a, b) => {
                        if (selectedSort == "population") {
                            return (b.population - a.population)
                        }

                        else {
                            /* permet de trier par ordre alphabétique en tenant compte de la ponctuation*/
                            return a.translations.fra.common.localeCompare(b.translations.fra.common, 'fr', { ignorePunctuation: true })
                        }
                    })
                    .map((country, index) => (<Card key={index} country={country} />))
                }


            </ul>
        </div>
    );
};

export default Countries;