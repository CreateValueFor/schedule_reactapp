import React, { useState } from 'react';
import { dbService } from '../../../../firebase';
import { useTodoDispatch, useTodoState } from '../../../pages/TodoPage';
import { RectangleButton } from '../../atoms/button';
import { PostForm } from '../../atoms/form';
import { PostInput } from '../../atoms/input';
import { PostTitle } from '../../atoms/text';

function LeftHeader({ goal }) {
  const [value, setValue] = useState('');

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const { goals, todos } = useTodoState();

  const dispatch = useTodoDispatch();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE_GOAL',
      goals: value,
    });
  };

  const saveSchedule = async () => {
    const date = new Date();
    await dbService
      .collection('daily')
      .doc(`${date.toLocaleDateString()}`)
      .set({
        todos,
        createdAt: Date.now(),
      });
    window.confirm('저장되었습니다.');
  };

  return (
    <div>
      <PostTitle>
        {`${year}년 
          ${month >= 10 ? month : `0${month}`}월 
          ${day >= 10 ? day : `0${day}`}일 
          ${hours >= 10 ? hours : `0${hours}`}시 
          ${minutes >= 10 ? minutes : `0${minutes}`}분 
          `}
        <RectangleButton onClick={saveSchedule}>저장</RectangleButton>
      </PostTitle>
      <PostTitle>오늘의 목표 : {goals}</PostTitle>
      <PostForm onSubmit={onSubmit}>
        <PostInput onChange={onChange}>{goal}</PostInput>
      </PostForm>
    </div>
  );
}

export default LeftHeader;
