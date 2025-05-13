import { getCountry } from '../../api-calls/getCountry.js';
import { countryCards } from '../components/countryCard.js';
import dom from '../dom.js';

let timeoutId;

export const keydownHandler = () => {
    clearTimeout(timeoutId);

    dom.countryContainer.innerHTML = '';
    dom.countryContainer.innerText = 'Loading...';
    timeoutId = setTimeout(async () => {
        try {
            dom.countryContainer.innerHTML = '';
            const result = await getCountry(dom.input.value);
            console.log(result);
            dom.countryContainer.append(countryCards(result));
        } catch (error) {
            dom.countryContainer.innerText = "This country doesn't exist";
        }
    }, 1000);
};
