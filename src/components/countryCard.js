import { flatHandler } from '../handlers/flatHandler.js';

export const countryCards = (countries) => {
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    countries.forEach((country) => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card-container';

        const titleCountry = document.createElement('h2');
        titleCountry.className = 'title-country';
        titleCountry.innerText = country.name.common;

        const capitalCountry = document.createElement('p');
        capitalCountry.className = 'capital-country';
        capitalCountry.innerText = `Capital: ${country.capital}`;

        const bordersCountry = document.createElement('p');
        bordersCountry.className = 'borders-country';
        bordersCountry.innerText = `Borders: ${country.borders}`;

        const continentCountry = document.createElement('p');
        continentCountry.className = 'continent-country';
        continentCountry.innerText = `Continent: ${country.continents}`;

        const currencyCountry = document.createElement('p');
        currencyCountry.className = 'currency-country';
        currencyCountry.innerText = `Currency: ${
            flatHandler(country.currencies)[0].name
        } ${flatHandler(country.currencies)[0].symbol}`;

        const flagCountry = document.createElement('p');
        flagCountry.className = 'flag-country';
        flagCountry.innerText = `Flag: ${country.flag}`;

        const langueCountry = document.createElement('p');
        langueCountry.className = 'langue-country';
        langueCountry.innerText = `Langue: ${flatHandler(country.languages)}`;

        const populationCountry = document.createElement('p');
        populationCountry.className = 'population-country';
        populationCountry.innerText = `Population: ${country.population}`;

        const timeZoneCountry = document.createElement('p');
        timeZoneCountry.className = 'timeZone-country';
        timeZoneCountry.innerText = `Time zone: ${country.timezones}`;

        cardContainer.append(
            titleCountry,
            capitalCountry,
            bordersCountry,
            continentCountry,
            currencyCountry,
            flagCountry,
            langueCountry,
            populationCountry,
            timeZoneCountry
        );

        cardsContainer.appendChild(cardContainer);
    });
    return cardsContainer;
};
