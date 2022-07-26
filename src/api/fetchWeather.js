import axios from "axios";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
// const API_KEY = "f33a484cf794d08d0148764789aaba32"
const API_KEY = "4815de1271aab3a13b6a08183502fb53"


export const fetchWeather = async (query) => {
    const response = await axios.get(API_URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return response.data;
}