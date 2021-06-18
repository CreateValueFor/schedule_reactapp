import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const StyledSideMain = styled.div`
  width: 100%;
  padding: 30px 10px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  height: 80%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

function TodoOrganism() {
  return (
    <StyledSideMain>
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </StyledSideMain>
  );
}

export default TodoOrganism;
