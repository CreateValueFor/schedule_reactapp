import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../../../pages/TodoPage';
import { LockOver } from '../../atoms/lockOverlay';
import TodoItem from './TodoItem';

const StyledSideMain = styled.div`
  width: 100%;
  padding: 30px 10px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  height: 70%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

function TodoOrganism() {
  const { todos } = useTodoState();
  return (
    <StyledSideMain>
      {todos.map((todo) => (
        <>
          {todo.done && <LockOver width={'520px'} height={'40px'}></LockOver>}
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.todo}
            done={todo.done}
            label={todo.label}
            grade={todo.grade}
          />
        </>
      ))}
    </StyledSideMain>
  );
}

export default TodoOrganism;
