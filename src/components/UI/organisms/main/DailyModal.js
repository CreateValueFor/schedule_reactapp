import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  useCalendarDispatch,
  useCalendarState,
} from '../../../pages/CalendarPage';
import { PostTitle } from '../../atoms/text';
import Close from '../../../../assets/svg/close-light.svg';
import { DefaultCircleButton } from '../../atoms/button';
import { FlexBox, StyledFlexBox } from '../../atoms/box';

import ModalItem from '../../molecules/Modal/ModalItem';
import { LockOver } from '../../atoms/lockOverlay';

const StyledDailyModal = styled(StyledFlexBox)``;

const CloseButton = styled(DefaultCircleButton)`
  width: 32px;
  height: 32px;
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50%;
  margin-left: auto;
  z-index: 10;
`;

function DailyModal() {
  const state = useCalendarState();
  const dispatch = useCalendarDispatch();

  const { selectDate, selectDateTodos } = state;
  const onClick = () => {
    dispatch({
      type: 'CLOSE_MODAL',
    });
  };
  useEffect(() => {
    console.log(selectDateTodos);
  }, [selectDateTodos]);
  console.log(selectDateTodos);
  return (
    <StyledDailyModal dir={'column'}>
      <FlexBox dir={'row'}>
        <PostTitle>{selectDate.format('YYYY년 MM월 DD일')}</PostTitle>
        <CloseButton
          margin={'0px'}
          onClick={onClick}
          svg={Close}
          color={'#0c0300d1'}
        />
      </FlexBox>
      {selectDateTodos ? (
        selectDateTodos.todos.map((todo) => (
          <>
            {todo.done && <LockOver width={'520px'} height={'40px'}></LockOver>}
            <ModalItem
              key={todo.id}
              id={todo.id}
              text={todo.todo}
              done={todo.done}
              label={todo.label}
              grade={todo.grade}
            />
          </>
        ))
      ) : (
        <div>기록된 일정이 없습니다.</div>
      )}
    </StyledDailyModal>
  );
}

export default DailyModal;
