import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Plus from '../../../../assets/svg/plus-solid.svg';
import { CircleButton } from '../../atoms/button';
import { PostForm } from '../../atoms/form';
import { PostInput, PostLabelInput } from '../../atoms/input';

const StyledTodoCreate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;

  button {
    transition: 0.125s all ease-in;
    ${(props) =>
      props.open &&
      css`
        transform: rotate(45deg);
      `}
  }
`;

function TodoCreate() {
  const [inputBtn, setInputBtn] = useState(false);
  const onClick = (e) => {
    setInputBtn((prev) => !prev);
    console.log(e);
  };
  return (
    <StyledTodoCreate open={inputBtn}>
      <CircleButton
        margin={'px'}
        open={inputBtn}
        onClick={onClick}
        svg={Plus}
        color
      />
      {inputBtn && (
        <PostForm>
          <PostInput placeholder={'할 일을 입력하세요'} />
          <PostLabelInput placeholder={'할 일을 입력하세요'} />
        </PostForm>
      )}
    </StyledTodoCreate>
  );
}

export default TodoCreate;
