import React from 'react';
import styled from 'styled-components';
import { PostTitle } from '../../atoms/text';
import snow from '../../../../assets/weather/snow.png';
import clouds from '../../../../assets/weather/clouds.png';
import clear from '../../../../assets/weather/clear.png';
import fewClouds from '../../../../assets/weather/fewCloud.png';
import mist from '../../../../assets/weather/mist.png';
import stormy from '../../../../assets/weather/stormy-day.png';
import rainy from '../../../../assets/weather/rainy-day.png';

const StyledWeather = styled.div`
  display: flex;
  border: 1px solid black;
  height: 100px;
`;
//prittier-ignore
const weatherList = {
  'Clear sky': clear,
  'Few clouds': fewClouds,
  'Scattered clouds': clouds,
  'Broken clouds': fewClouds,
  'Shower rain': rainy,
  Rain: rainy,
  Thunderstorm: stormy,
  Snow: snow,
  Mist: mist,
};

function Weather({ weather, temp }) {
  // 날씨 정보 불러오기
  console.log(weather);
  const currentWeather = weatherList[weather];
  console.log(weatherList['rain']);
  return (
    <StyledWeather>
      {/* 날씨에 따라 이모티콘 바뀌도록 */}
      <img src={currentWeather} alt="weather" />
      <PostTitle>{temp} 도입니다.</PostTitle>
      <PostTitle>{weather}</PostTitle>
    </StyledWeather>
  );
}

export default Weather;
