import React from 'react';
import { PostTitle } from '../../atoms/text';

function LeftHeader({ year, month, day, hours, minutes, goal }) {
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
      <PostTitle>오늘의 목표 : {goal}</PostTitle>
    </div>
  );
}

export default LeftHeader;
