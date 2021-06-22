import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../../atoms/box';

const StyledMonthCurrent = styled(StyledFlexBox)`
  width: 50%;
  height: 56%;
  border: 1px solid black;
`;

function MonthCurrent() {
  return <StyledMonthCurrent></StyledMonthCurrent>;
}

export default MonthCurrent;
