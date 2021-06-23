import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../../atoms/box';

const StyledMonthCurrent = styled(StyledFlexBox)`
  width: 50%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function MonthCurrent({ children }) {
  return <StyledMonthCurrent>{children}</StyledMonthCurrent>;
}

export default MonthCurrent;
