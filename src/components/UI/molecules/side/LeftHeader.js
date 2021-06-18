import React, { useState } from 'react';
import { useTodoDispatch, useTodoState } from '../../../pages/TodoPage';
import { PostForm } from '../../atoms/form';
import { PostInput } from '../../atoms/input';
import { PostTitle } from '../../atoms/text';

function LeftHeader({ goal }) {
  const [value, setValue] = useState();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_GOAL',
      goals: value,
    });
  };

  return (
    <div>
      <PostTitle>
        {`${year}년 
          ${month > 10 ? month : `0${month}`}월 
          ${day > 10 ? day : `0${day}`}일 
          ${hours > 10 ? hours : `0${hours}`}시 
          ${minutes > 10 ? minutes : `0${minutes}`}분 
          `}
      </PostTitle>
      <PostTitle>오늘의 목표 : {state.goals}</PostTitle>
      <PostForm onSubmit={onSubmit}>
        <PostInput onChange={onChange}>{goal}</PostInput>
      </PostForm>
    </div>
  );
}

export default LeftHeader;
