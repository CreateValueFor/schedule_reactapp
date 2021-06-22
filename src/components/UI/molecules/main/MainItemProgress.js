import React from 'react';
import styled from 'styled-components';
import { StyledFlexBox } from '../../atoms/box';

const StyledMainItemProgress = styled(StyledFlexBox)`
  width: 20%;
  height: 100%;
  border: 1px solid black;
`;

function MainItemProgress() {
  return <StyledMainItemProgress></StyledMainItemProgress>;
}

export default MainItemProgress;
