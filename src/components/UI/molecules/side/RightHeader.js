import React from 'react';
import { CircleButton } from '../../atoms/button';
import Book from '../../../../assets/svg/book-solid.svg';
import Edit from '../../../../assets/svg/edit-solid.svg';

function RightHeader() {
  const onClick = () => {};
  return (
    <div>
      <CircleButton
        margin={'14px'}
        onClick={onClick}
        svg={Book}
        color={'#5f4339'}
      />
      <CircleButton
        margin={'14px'}
        onClick={onClick}
        svg={Edit}
        color={'#5f4339'}
      />
    </div>
  );
}

export default RightHeader;
