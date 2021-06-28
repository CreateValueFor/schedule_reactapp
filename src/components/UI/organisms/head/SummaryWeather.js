import React, { useEffect, useState } from 'react';
import useWeather from './useWeather';
import Weather from '../../molecules/header/Weather';

import styled from 'styled-components';

const StyledSummaryWeather = styled.div`
  width: 30%;
`;

function SummaryWeather() {
  return (
    <StyledSummaryWeather>
      <Weather />
    </StyledSummaryWeather>
  );
}

export default SummaryWeather;
