import axios from 'axios';

export default axios.create({
    baseURL: 'https://lair-dice.azurewebsites.net/diceroll/',
    responseType: 'json',
});