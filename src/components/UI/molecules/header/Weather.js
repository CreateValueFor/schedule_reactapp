import React from 'react';
import styled from 'styled-components';
import { TiAdjustBrightness } from 'react-icons/ti';
import { PostTitle } from '../../atoms/text';

const StyledWeather = styled.div`
  display: flex;
  border: 1px solid black;
  height: 100px;
`;

function Weather() {
  // 날씨 정보 불러오기
  return (
    <StyledWeather>
      <TiAdjustBrightness size="32" color="red" />
      {/* 날씨에 따라 이모티콘 바뀌도록 */}
      <PostTitle>%% 도입니다.</PostTitle>
    </StyledWeather>
  );
}

export default Weather;
