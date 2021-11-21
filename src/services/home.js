import axios from 'axios';
import { stateCodes } from './states';

const index = Math.floor(Math.random() * stateCodes.length);
const state = stateCodes[index];

export const getParkOfTheDay = async () => {
    try {
        const NPS_KEY = 'NRm6i7Z6DZ31vFxkYN9hsDXvk1B2EBShDeFIKT7R';
        const res = await axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=${NPS_KEY}`);
        const park = res.data.data[Math.floor(Math.random() * res.data.data.length)];

        return park;
    } catch (err) {
        console.log(err);
    }
}