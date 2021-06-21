import React from 'react';
import ThumbsUp from '../../../../assets/svg/thumbs-up-regular.svg';
import ThumbsDown from '../../../../assets/svg/thumbs-down-regular.svg';
import Circle from '../../../../assets/svg/circle-regular.svg';
import { CircleButton } from '../../atoms/button';
import { useTodoDispatch } from '../../../pages/TodoPage';

function TodoButton({ id, grade }) {
  const dispatch = useTodoDispatch();

  const onToggle = (e) => {
    const {
      target: { name },
    } = e;
    if (grade === name) {
      dispatch({ type: 'TOGGLE', id, grade: '' });
    } else dispatch({ type: 'TOGGLE', id, grade: name });
  };
  return (
    <div>
      {/* 완료도 평가 */}
      {/* 스타일드div props지정안했을 때 넣는 법 */}
      <CircleButton
        name="good"
        onClick={onToggle}
        margin={'0px'}
        svg={ThumbsUp}
        color
      />
      <CircleButton
        name="soso"
        onClick={onToggle}
        margin={'0px'}
        svg={Circle}
        color
      />
      <CircleButton
        name="bad"
        onClick={onToggle}
        margin={'0px'}
        svg={ThumbsDown}
        color
      />
    </div>
  );
}

export default TodoButton;
