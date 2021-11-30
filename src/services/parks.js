import axios from 'axios';
import { stateCodes } from './data';

const index = Math.floor(Math.random() * stateCodes.length);
const state = stateCodes[index];
const NPS_KEY = 'NRm6i7Z6DZ31vFxkYN9hsDXvk1B2EBShDeFIKT7R';

export const getParkOfTheDay = async () => {
    try {
        const res = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=${NPS_KEY}`);
        const park = res.data.data[Math.floor(Math.random() * res.data.data.length)];

        return park;
    } catch (err) {
        console.log(err);
    }
}

export const getNewsReleases = async () => {
    try {
        const res = await axios.get(`https://developer.nps.gov/api/v1/newsreleases?limit=5&api_key=${NPS_KEY}`);
        const news = res.data.data;

        return news;
    } catch (err) {
        console.log(err);
    }
}

export const getParkInfo = async () => {
    try {
        const res = await axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=anch&api_key=${NPS_KEY}`);
        const park = res.data.data[0];

        return park;
    } catch (err) {
        console.log(err);
    }
}