import React from 'react';
import styled from 'styled-components';

import Todo from '../../molecules/side/Todo';
import TodoButton from '../../molecules/side/TodoButton';

const StyledTodoItem = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 8px;
  &.inactive {
    &:hover {
      background: #e0e0e0;
    }
  }
`;

function TodoItem({ id, text, label, done, grade }) {
  return (
    <StyledTodoItem className={done ? 'active' : 'inactive'}>
      <Todo id={id} done={done} text={text} label={label} grade={grade} />
      <TodoButton id={id} grade={grade} />
    </StyledTodoItem>
  );
}

export default TodoItem;
