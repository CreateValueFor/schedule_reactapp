import React, { useEffect, useState } from 'react';
import useWeather from './useWeather';
import Weather from '../../molecules/header/Weather';
import styled from 'styled-components';
import axios from 'axios';

const StyledSummaryWeather = styled.div`
  width: 30%;
`;
const API_KEY = 'f66ddbcb1622e2b67fe57c66d49dbd22';
function SummaryWeather() {
  const [cord, setCords] = useState({});
  const [weatherObj, setWeatherObj] = useState({});
  const success = (cord) => {
    const { latitude, longitude } = cord.coords;
    setCords({ latitude, longitude });
  };
  const fail = () => {
    console.log('failed');
  };

  useEffect(() => {
    console.log(navigator.geolocation.getCurrentPosition(success, fail));
    const lat = cord.latitude;
    const lon = cord.longitude;

    axios
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
  console.log(weatherObj);

  return (
    <StyledSummaryWeather>
      <Weather weather={weatherObj.weat} temp={weatherObj.tmp} />
    </StyledSummaryWeather>
  );
}

export default SummaryWeather;
