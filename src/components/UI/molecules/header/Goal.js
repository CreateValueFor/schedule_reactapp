import React from 'react';
import styled from 'styled-components';
import { DefaultRectangleButton } from '../../atoms/button';
import { PostTitle } from '../../atoms/text';

const StyledGoal = styled.div`
  display: flex;
  h2 {
    display: flex;
    flex: 1;
  }
`;

function Goal() {
  return (
    <StyledGoal>
      <PostTitle>목표는 이것 입니다.</PostTitle>
      <DefaultRectangleButton>수정</DefaultRectangleButton>
      <DefaultRectangleButton>선택</DefaultRectangleButton>
    </StyledGoal>
  );
}

export default Goal;
