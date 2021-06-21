import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoTemplate from './components/templates/TodoTemplate';
import { dbService } from './firebase';

const StyledApp = styled.div`
  background-color: #eeeeee;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <StyledApp>
      <TodoTemplate />
    </StyledApp>
  );
}

export default App;
