import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../../atoms/box';
import MainCalendarHeader from './MainCalendarHeader';

const StyledMainCalendar = styled(StyledFlexBox)`
  height: 71%;
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
`;

function MainCalendar() {
  return (
    <StyledMainCalendar>
      <MainCalendarHeader></MainCalendarHeader>
    </StyledMainCalendar>
  );
}
export default MainCalendar;
