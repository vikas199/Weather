import axios from 'axios';

const API_KEY='a4f19ddc0c526bc277d267c5a5859a1a';
const ROOT_URL='http://api.openweathermap.org/data/2.5/forecast?appid=a4f19ddc0c526bc277d267c5a5859a1a';


export const FETCH_WEATHER='FETCH_WEATHER';


export function fetchWeather(city) {
  const url=`${ROOT_URL}&q=${city},us`;
  const request= axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };

}
