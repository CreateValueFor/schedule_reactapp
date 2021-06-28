import React from 'react';
import styled from 'styled-components';
import CalendarTemplate from './components/templates/CalendarTemplate';
import SummaryTemplate from './components/templates/SummaryTemplate';
import TodoTemplate from './components/templates/TodoTemplate';

const StyledApp = styled.div`
  background-color: #eeeeee;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <StyledApp>
      <SummaryTemplate />
      <CalendarTemplate />
      <TodoTemplate />
    </StyledApp>
  );
}

export default App;
