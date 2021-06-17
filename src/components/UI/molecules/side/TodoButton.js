import React from 'react';
import ThumbsUp from '../../../../assets/svg/thumbs-up-regular.svg';
import ThumbsDown from '../../../../assets/svg/thumbs-down-regular.svg';
import Circle from '../../../../assets/svg/circle-regular.svg';
import { CircleButton } from '../../atoms/button';

function TodoButton() {
  return (
    <div>
      {/* 완료도 평가 */}
      <CircleButton margin={'0px'} onClick svg={ThumbsUp} color />
      <CircleButton margin={'0px'} onClick svg={Circle} color />
      <CircleButton margin={'0px'} onClick svg={ThumbsDown} color />
    </div>
  );
}

export default TodoButton;
