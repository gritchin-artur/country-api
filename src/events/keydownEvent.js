import dom from '../dom.js';
import { keydownHandler } from '../handlers/keydownHandler.js';

export const keydownEvent = () => {
    dom.input.addEventListener('keydown', keydownHandler);
};
