import { ORIGIN } from '../src/config.js';

export const getCountry = async (country) => {
    const URL = `${ORIGIN}/${country}`;

    const encodedURL = encodeURI(URL);
    const response = await fetch(encodedURL);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}\n-> ${URL}`);
    }

    return await response.json();
};
