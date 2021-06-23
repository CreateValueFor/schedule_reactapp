import React from 'react';
import styled from 'styled-components';
import { useCalendarState } from '../../../pages/CalendarPage';
import { StyledFlexBox } from '../../atoms/box';
import Modal from '../modal';
import DailyModal from './DailyModal';
import MainCalendarBody from './MainCalendarBody';
import MainCalendarHeader from './MainCalendarHeader';

const StyledMainCalendar = styled(StyledFlexBox)`
  height: 71%;
  border: 1px solid black;
  width: 90%;
  margin: 0 auto;
`;

function MainCalendar() {
  const { isModal } = useCalendarState();
  return (
    <StyledMainCalendar>
      <MainCalendarBody></MainCalendarBody>
      {isModal && (
        <Modal>
          <DailyModal></DailyModal>
        </Modal>
      )}
    </StyledMainCalendar>
  );
}
export default MainCalendar;
