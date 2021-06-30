import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = 'f66ddbcb1622e2b67fe57c66d49dbd22';

function useWeather() {
  const [cord, setCords] = useState({});
  const [weatherObj, setWeatherObj] = useState({});
  const success = (cord) => {
    const { latitude, longitude } = cord.coords;
    setCords({ latitude, longitude });
  };
  const fail = () => {
    console.log('failed');
  };

  useEffect(async () => {
    await navigator.geolocation.getCurrentPosition(success, fail);
    const lat = cord.latitude;
    const lon = cord.longitude;

    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
      )
      .then((response) => {
        const {
          data: { main, weather },
        } = response;
        const tmp = main.temp;
        const weat = weather[0].main;
        setWeatherObj({ weat, tmp });
        console.log('data fetched');
      });
  }, []);
  const { weat, tmp } = weatherObj;

  return [weat, tmp];
}

export default useWeather;
