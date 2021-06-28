import { useEffect, useState } from 'react';

const API_KEY = 'f66ddbcb1622e2b67fe57c66d49dbd22';

function useWeather() {
  const [weatherObj, setWeatherObj] = useState(null);

  const getWeather = async (lat, lng) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`,
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        const weather = json.weather[0].main;
        const temp = json.main.temp;
        setWeatherObj({ weather, temp });
      });
  };
  const handleGeoSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude,
    };

    getWeather(latitude, longitude);
  };
  function handleGeoError() {
    console.log('Cant access geo location');
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
  }, []);
  const { weather, temp } = weatherObj;
  console.log(weather, temp);
  return [weather, temp];
}

export default useWeather;
