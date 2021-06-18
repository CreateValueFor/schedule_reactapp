import React from 'react';
import styled from 'styled-components';
import Todo from '../../molecules/side/Todo';
import TodoButton from '../../molecules/side/TodoButton';

const StyledTodoItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  &:hover {
    background-color: #e0e0e0;
  }
`;

function TodoItem() {
  return (
    <StyledTodoItem>
      <Todo />
      <TodoButton />
    </StyledTodoItem>
  );
}

export default TodoItem;
