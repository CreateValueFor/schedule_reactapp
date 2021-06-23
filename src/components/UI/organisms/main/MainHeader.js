import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../../atoms/box';
import MainItemProgress from '../../molecules/main/MainItemProgress';
import ModalButtonContainer from '../../molecules/main/ModalButtonContainer';
import MonthCurrent from '../../molecules/main/MonthCurrent';
import CalendarHeader from './MainCalendarHeader';

const StyledMainHeader = styled(StyledFlexBox)`
  height: 16.1%;
  width: 90%;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`;

function MainHeader() {
  return (
    <StyledMainHeader dir={'row'}>
      <MainItemProgress></MainItemProgress>
      <MonthCurrent>
        <CalendarHeader></CalendarHeader>
      </MonthCurrent>
      <ModalButtonContainer></ModalButtonContainer>
    </StyledMainHeader>
  );
}

export default MainHeader;
