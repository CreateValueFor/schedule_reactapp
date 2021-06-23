import React from 'react';
import styled from 'styled-components';
import CalendarTemplate from './components/templates/CalendarTemplate';
import TodoTemplate from './components/templates/TodoTemplate';
import Modal from './components/UI/organisms/modal';

const StyledApp = styled.div`
  background-color: #eeeeee;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <StyledApp>
      <CalendarTemplate />
      <TodoTemplate />
      {/* <Modal /> */}
    </StyledApp>
  );
}

export default App;
