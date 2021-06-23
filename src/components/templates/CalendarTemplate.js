import React from 'react';
import styled from 'styled-components';
import MainCalendar from '../UI/organisms/main/MainCalendar';
import MainHeader from '../UI/organisms/main/MainHeader';
import CalendarProvider from '../pages/CalendarPage';
import Modal from '../UI/organisms/modal';
import TodoTemplate from './TodoTemplate';

const StyledCalendarTemplate = styled.div`
  width: 56.45%;
  height: 65%;
  position: absolute;
  left: 50px;
  bottom: 50px;
  border: 1px solid black;
  border-radius: 8px;
  background: #fff;
`;

function CalendarTemplate() {
  return (
    <CalendarProvider>
      <StyledCalendarTemplate>
        <MainHeader></MainHeader>
        <MainCalendar></MainCalendar>
      </StyledCalendarTemplate>
    </CalendarProvider>
  );
}

export default CalendarTemplate;
