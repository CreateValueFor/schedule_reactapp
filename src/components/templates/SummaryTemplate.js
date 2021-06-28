import React from 'react';
import styled from 'styled-components';
import { FlexBox, StyledFlexBox } from '../UI/atoms/box';
import Compare from '../UI/molecules/header/Compare';
import Goal from '../UI/molecules/header/Goal';

import SummaryWeather from '../UI/organisms/head/SummaryWeather';

const StyledCalendarTemplate = styled.div`
  width: 56.45%;
  height: 20%;
  position: absolute;
  left: 50px;
  top: 50px;

  border-radius: 8px;
  background: #fff;
  padding: 2em;
  display: flex;
`;
const RestyledFlexBox = styled(StyledFlexBox)`
  flex: 1;
`;
function SummaryTemplate() {
  return (
    <StyledCalendarTemplate>
      <SummaryWeather></SummaryWeather>
      <RestyledFlexBox dir={'column'} margin={'0 30px'}>
        <Goal></Goal>
        <Compare></Compare>
      </RestyledFlexBox>
    </StyledCalendarTemplate>
  );
}
export default SummaryTemplate;
