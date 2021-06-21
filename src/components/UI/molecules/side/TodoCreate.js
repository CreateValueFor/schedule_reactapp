import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Plus from '../../../../assets/svg/plus-solid.svg';
import { useTodoDispatch, useTodoNextId } from '../../../pages/TodoPage';
import { CircleButton, RectangleButton } from '../../atoms/button';
import { PostForm } from '../../atoms/form';
import { PostInput, PostLabelInput } from '../../atoms/input';

const StyledTodoCreate = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
  flex-direction: column;

  & > button {
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
  const [todo, setTodo] = useState('');
  const [label, setLabel] = useState('');
  const onClick = (e) => {
    setInputBtn((prev) => !prev);
  };
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        todo: todo,
        label: label,
        done: false,
      },
    });
    nextId.current += 1;
    setTodo('');
    setLabel('');
  };
  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;
    if (name === 'todo') {
      setTodo(value);
    } else if (name === 'label') {
      setLabel(value);
    }
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
        <PostForm onSubmit={onSubmit}>
          <PostInput
            name="todo"
            required
            placeholder={'할 일을 입력하세요'}
            onChange={onChange}
            value={todo}
          />
          <PostLabelInput
            name="label"
            required
            placeholder={'할 일을 입력하세요'}
            onChange={onChange}
            value={label}
          />
          <RectangleButton>생성</RectangleButton>
        </PostForm>
      )}
    </StyledTodoCreate>
  );
}

export default TodoCreate;
