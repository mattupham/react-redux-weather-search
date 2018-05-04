import axios from 'axios';

const API_KEY = 'b54a98362fd6469f8bf368ac9f89c989';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}