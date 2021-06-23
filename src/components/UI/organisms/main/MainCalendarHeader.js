import React from 'react';
import styled from 'styled-components';
import previous from '../../../../assets/svg/prev_arrow.svg';
import next from '../../../../assets/svg/next_arrow.svg';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../../pages/CalendarPage';
import { PostTitle } from '../../atoms/text';
import { CircleButton } from '../../atoms/button';

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px;
`;

function CalendarHeader() {
  const { viewDate } = useCalendarState();
  const dispatch = useCalendarDispatch();

  return (
    <StyledHeader>
      <CircleButton
        onClick={() =>
          dispatch({
            type: 'SUBSTRACT',
          })
        }
        margin={'0px 8px'}
        svg={previous}
      ></CircleButton>
      <PostTitle>{viewDate.format('YY년-MM월')}</PostTitle>
      <CircleButton
        onClick={() =>
          dispatch({
            type: 'ADD',
          })
        }
        margin={'0px 8px'}
        svg={next}
      ></CircleButton>
    </StyledHeader>
  );
}
export default CalendarHeader;
