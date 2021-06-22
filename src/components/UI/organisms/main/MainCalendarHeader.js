import React from 'react';
import styled from 'styled-components';
import previous from '../../../../assets/svg/prev_arrow.svg';
import next from '../../../../assets/svg/next_arrow.svg';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../../pages/CalendarPage';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
  .thisMonth {
    font-weight: 700;
    color: #292929;
    line-height: 24px;
  }
  button {
    width: 24px;
    margin: 0 8px;
  }
  .previous_icon {
    width: 24px;
    height: 24px;
    background: url(${previous}) center no-repeat;
  }
  .next_icon {
    width: 24px;
    height: 24px;
    background: url(${next}) center no-repeat;
  }
`;

function CalendarHeader() {
  const { viewDate } = useCalendarState();
  const dispatch = useCalendarDispatch();

  return (
    <StyledHeader>
      <button
        className="previous_icon"
        onClick={() =>
          dispatch({
            type: 'SUBSTRACT',
          })
        }
      ></button>
      <span className="thisMonth">{viewDate.format('MM')}월</span>
      <button
        className="next_icon"
        onClick={() =>
          dispatch({
            type: 'ADD',
          })
        }
      ></button>
    </StyledHeader>
  );
}
export default CalendarHeader;
