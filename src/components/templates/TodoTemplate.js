import React from 'react';
import styled from 'styled-components';
import { TodoProvider } from '../pages/TodoPage';
import Progressbar from '../UI/molecules/side/Progressbar';
import SideBottom from '../UI/organisms/side/SideBottom';
import SideHeader from '../UI/organisms/side/SideHeader';
import TodoOrganism from '../UI/organisms/side/TodoOrganism';

const StyledTodoTemplate = styled.div`
  width: 31.25%;
  height: 90%;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  right: 50px;
  top: 50px;
`;

function TodoTemplate() {
  return (
    <TodoProvider>
      <StyledTodoTemplate>
        <SideHeader />
        <Progressbar />
        <TodoOrganism />
        <SideBottom />
      </StyledTodoTemplate>
    </TodoProvider>
  );
}

export default TodoTemplate;
